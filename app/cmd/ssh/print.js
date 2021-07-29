'use strict';

/** @returns {string} */
module.exports = () => [
    'XDG_SESSION_ID',
    'XDG_SESSION_TYPE',
    'XDG_SESSION_CLASS',
    'SSH_CLIENT',
    'SSH_CONNECTION',
    'SSH_TTY',
]
    .map(elem => `${elem}: ${process.env[elem]}`)
    .join('\n');
