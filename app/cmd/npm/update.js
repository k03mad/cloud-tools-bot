import {repo, shell} from '@k03mad/util';

import restart from '../pm/restart.js';

const repoUpdate = [
    'cloud-tools-bot',
    'cloud-tools-cron',
];

/** @returns {Promise} */
export default async () => {
    const logs = ['__ NPM __'];

    const outdated = await shell.run('npm -g outdated --parseable --depth=0', {returnOnErr: true});

    const parsed = outdated
        .split(/\s+/)
        .map(elem => elem.split(':')[3])
        .filter(Boolean);

    if (parsed.length > 0) {

        for (const pkg of parsed) {
            let output;

            try {
                output = await shell.run(`npm i -g ${pkg}`);
            } catch (err) {
                output = err;
            }

            logs.push(
                `>>> ${pkg} <<<`,
                output,
            );
        }

    }

    logs.push('__ REPO __');

    for (const app of repoUpdate) {
        logs.push(
            `>>> ${app} <<<`,
            await repo.update(app),
        );
    }

    logs.push(await restart());

    return logs;
};
