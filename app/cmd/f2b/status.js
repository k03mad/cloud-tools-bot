'use strict';

const {shell} = require('@k03mad/utils');

const jails = ['grafana', 'sshd'];
const jailStatus = (jail = '') => `sudo fail2ban-client status ${jail}`;

/** @returns {Promise<string>} */
module.exports = async () => {
    const data = [
        await shell.run(jailStatus()),
        ...await Promise.all(jails.map(jail => shell.run(jailStatus(jail)))),
    ];

    return data.join('\n\n');
};
