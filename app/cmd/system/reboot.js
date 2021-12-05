import utils from '@k03mad/utils';

const {shell} = utils;

/** @returns {Promise} */
export default () => shell.run('sudo shutdown -r +1');
