import utils from '@k03mad/util';

const {shell} = utils;

/**
 * @param {string|number} num
 * @returns {Promise<string>}
 */
export default num => {
    if (!num) {
        return 'Missing number arg';
    }

    return shell.run(`sudo ufw delete ${num}`);
};
