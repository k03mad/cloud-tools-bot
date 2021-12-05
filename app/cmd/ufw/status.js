import utils from '@k03mad/utils';

const {shell} = utils;

/** @returns {Promise<string>} */
export default () => shell.run('sudo ufw status numbered');
