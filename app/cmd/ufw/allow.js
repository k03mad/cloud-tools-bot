import utils from '@k03mad/util';

const {shell} = utils;

/**
 * @param {string} allow
 * @returns {Promise<string>}
 */
export default allow => {
    if (!allow) {
        return 'Missing allow arg';
    }

    return shell.run(`sudo ufw allow ${allow}`);
};
