import utils from '@k03mad/utils';

const {shell} = utils;

/** @returns {Promise<string>} */
export default () => shell.run([
    'rustup update',
    'cargo install-update -a',
]);
