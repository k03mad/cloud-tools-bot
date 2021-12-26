import {shell} from '@k03mad/util';

/** @returns {Promise<string>} */
export default async () => {
    const allApps = ['cron'];
    const currentApps = ['bot'];

    for (const app of allApps) {
        await shell.run(`pm2 restart ${app} --update-env`);
    }

    for (const app of currentApps) {
        shell.run(`sleep 5 && pm2 restart ${app} --update-env`);
    }

    return `restarting apps: ${[...allApps, ...currentApps].join(', ')}...`;
};
