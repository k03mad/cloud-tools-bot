'use strict';

const {shell} = require('@k03mad/utils');

/** @returns {Promise<string>} */
module.exports = async () => {
    const jailStatus = 'sudo fail2ban-client status';
    const jails = ['grafana', 'sshd'];

    const data = [
        await shell.run(jailStatus),
        ...await Promise.all(jails.map(jail => shell.run(`${jailStatus} ${jail}`))),
    ];

    return data.join('\n\n');
};
