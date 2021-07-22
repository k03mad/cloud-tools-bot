'use strict';

const {shell} = require('@k03mad/utils');

/**
 * @param {string|number} num
 * @returns {Promise<string>}
 */
module.exports = num => {
    if (!num) {
        return 'Missing number arg';
    }

    return shell.run(`sudo ufw delete ${num}`);
};
