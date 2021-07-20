'use strict';

const {shell} = require('@k03mad/utils');

/** @returns {Promise<string>} */
module.exports = async () => {
    const jails = ['sshd', 'grafana'];

    const data = [
        await shell.run('sudo fail2ban-client status'),
        ...await Promise.all(jails.map(jail => shell.run(`sudo fail2ban-client status ${jail}`))),
    ];

    return data.join('\n\n');
};
