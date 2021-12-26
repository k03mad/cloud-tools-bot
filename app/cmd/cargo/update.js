import {shell} from '@k03mad/util';

/** @returns {Promise<string>} */
export default () => shell.run([
    'rustup update',
    'cargo install-update -a',
]);
