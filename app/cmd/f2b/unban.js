'use strict';

const {shell} = require('@k03mad/utils');

const jails = ['grafana', 'sshd'];
const jailUnban = (jail, ip) => `sudo fail2ban-client set ${jail} unbanip ${ip}`;

/**
 * @param {string} ip
 * @returns {Promise<string>}
 * */
module.exports = async ip => {
    const data = await Promise.all(jails.map(jail => shell.run(jailUnban(jail, ip))));
    return data.join('\n\n');
};
