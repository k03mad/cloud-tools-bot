import {print, shell} from '@k03mad/util';
import {globby} from 'globby';

import reply from '../telegram/reply.js';

/**
 * Распарсить команды из списка и поставить их боту
 * @param {object} bot
 * @returns {Array}
 */
export default async bot => {
    const [commands, bin] = await Promise.all([
        globby('app/cmd'),
        shell.run('ls $(npm bin -g)'),
    ]);

    const list = commands
        .filter(elem => !elem.includes('cmd/index.js'))
        .map(elem => {
            const splitted = elem.split('/');
            const name = splitted.pop().replace('.js', '');
            const type = splitted.pop();

            return {command: `${type}_${name}`, description: 'local'};
        });

    bin.split(/\s+/).filter(Boolean).forEach(command => {
        if (
            /^mad_([a-z]+_[a-z]+)$/.test(command)
            && !/^mad_(node)_[a-z]+$/.test(command)
        ) {
            list.push({command, description: 'global'});
            reply(bot, command, shell.run, command);
        }
    });

    try {
        await bot.setMyCommands(list);
    } catch (err) {
        print.ex(err, {
            before: 'setMyCommandsErr',
            exit: true,
        });
    }

    return list;
};
