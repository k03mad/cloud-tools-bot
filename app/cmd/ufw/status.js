import {shell} from '@k03mad/util';

/** @returns {Promise<string>} */
export default () => shell.run('sudo ufw status numbered');
