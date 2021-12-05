import utils from '@k03mad/utils';

const {shell} = utils;

const aptUpdate = [
    'update',
    'dist-upgrade -y',
    'autoremove -y',
    'clean',
];

/** @returns {Promise} */
export default async () => {
    const logs = ['__ APT __'];

    for (const apt of aptUpdate) {
        logs.push(
            `>>> ${apt} <<<`,
            await shell.run(`sudo apt-get ${apt}`) || 'empty',
        );
    }

    return logs;
};
