import {shell} from '@k03mad/util';

/** @returns {Promise} */
export default () => shell.run('pm2 flush');
