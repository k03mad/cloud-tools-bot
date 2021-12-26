import {shell} from '@k03mad/util';

const jails = ['grafana', 'sshd'];
const jailStatus = (jail = '') => `sudo fail2ban-client status ${jail}`;

/** @returns {Promise<string>} */
export default async () => {
    const data = [
        await shell.run(jailStatus()),
        ...await Promise.all(jails.map(jail => shell.run(jailStatus(jail)))),
    ];

    return data.join('\n\n');
};
