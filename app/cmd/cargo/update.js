'use strict';

const {shell} = require('@k03mad/utils');

/** @returns {Promise<string>} */
module.exports = () => shell.run([
    'rustup update',
    'cargo install-update -a',
]);

