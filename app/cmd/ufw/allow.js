'use strict';

const {shell, promise} = require('@k03mad/utils');

/**
 * @param {string} arg
 * @returns {Promise<string>}
 */
module.exports = async arg => {
    const logs = [];
    arg = arg.trim();

    if (arg) {
        logs.push(await shell.run(`sudo ufw allow ${arg}`));
    }

    await promise.delay();
    logs.push(await shell.run('sudo ufw status verbose'));

    return logs;
};
