import {shell} from '@k03mad/util';
import fs from 'node:fs/promises';

const appsToRestart = ['cron'];

const restartString = app => `pm2 restart ${app} --update-env`;

/** @returns {Promise<string>} */
export default async () => {
    const pm2File = await fs.readFile('./pm2.json');
    const currentProcName = JSON.parse(pm2File).name;

    for (const app of appsToRestart) {
        await shell.run(restartString(app));
    }

    shell.run(`sleep 5 && ${restartString(currentProcName)}`);

    return `restarting apps: ${[...appsToRestart, currentProcName].join(', ')}...`;
};
