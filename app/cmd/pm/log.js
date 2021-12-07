import utils from '@k03mad/util';

const {shell} = utils;

/** @returns {Promise<string>} */
export default async () => {
    const log = await shell.run('pm2 logs --nostream --lines 100');
    return log.replace(/\[TAILING][\S\s]+?\n\n/, '');
};
