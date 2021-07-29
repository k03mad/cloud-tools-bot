'use strict';

const {shell} = require('@k03mad/utils');

/** @returns {Promise} */
module.exports = async () => {
    const env = await shell.run('printenv');

    return [...env.matchAll(/SSH.+/g)]
        .map(elem => elem[0])
        .join('\n');
};
