import {shell} from '@k03mad/util';

/** @returns {Promise<string>} */
export default async () => {
    const log = await shell.run('pm2 logs --nostream --lines 100');
    await shell.run('pm2 flush');
    return log.replace(/\[TAILING][\S\s]+?\n\n/, '');
};
