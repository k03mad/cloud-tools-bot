import * as cmds from './cmd/index.js';
import setBotCommandsList from './telegram/commands.js';
import bot from './telegram/config.js';
import errorsHandler from './telegram/errors.js';
import reply from './telegram/reply.js';

errorsHandler(bot);
setBotCommandsList(bot);

Object.entries(cmds)
    .forEach(([name, func]) => reply(bot, name, func));
