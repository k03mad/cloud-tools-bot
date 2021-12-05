import utils from '@k03mad/utils';

const {repo} = utils;

/** @returns {Promise} */
export default () => repo.run('magnet-co-parser', 'parse');
