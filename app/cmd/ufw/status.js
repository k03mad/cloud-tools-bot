import utils from '@k03mad/util';

const {shell} = utils;

/** @returns {Promise<string>} */
export default () => shell.run('sudo ufw status numbered');
