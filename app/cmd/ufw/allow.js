'use strict';

const {shell} = require('@k03mad/utils');

/**
 * @param {string} allow
 * @returns {Promise<string>}
 */
module.exports = allow => {
    if (!allow) {
        return 'Missing allow arg';
    }

    return shell.run(`sudo ufw allow ${allow}`);
};
