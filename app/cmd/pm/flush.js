import utils from '@k03mad/util';

const {shell} = utils;

/** @returns {Promise} */
export default () => shell.run('pm2 flush');
