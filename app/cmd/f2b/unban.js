import utils from '@k03mad/utils';

const {shell} = utils;

const jails = ['grafana', 'sshd'];
const jailUnban = (jail, ip) => `sudo fail2ban-client set ${jail} unbanip ${ip}`;

/**
 * @param {string} ip
 * @returns {Promise<string>}
 * */
export default async ip => {
    if (!ip) {
        return 'Missing ip arg';
    }

    const data = await Promise.all(jails.map(async jail => {
        const log = await shell.run(jailUnban(jail, ip));
        return `${jail}: ${log}`;
    }));

    return data.join('\n\n');
};
