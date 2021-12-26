import {shell} from '@k03mad/util';

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
