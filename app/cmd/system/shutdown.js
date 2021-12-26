import {shell} from '@k03mad/util';

/** @returns {Promise} */
export default () => shell.run('sudo shutdown -h +1');
