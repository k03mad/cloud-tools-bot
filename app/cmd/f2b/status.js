'use strict';

const {shell} = require('@k03mad/utils');

/** @returns {Promise<string>} */
module.exports = async () => {
    const data = [
        await shell.run('sudo fail2ban-client status'),
        await shell.run('sudo fail2ban-client status sshd'),
    ];

    return data.join('\n\n');
};
