'use strict';

module.exports = {
    telegram: {
        chat: Number(process.env.TELEGRAM_MY_CHAT),
        token: process.env.TELEGRAM_CLOUD_BOT,
        port: process.env.TELEGRAM_CLOUD_PORT,
    },
    cloud: {
        is: process.env.IS_CLOUD,
        domain: process.env.CLOUD_DOMAIN,
    },
    cert: {
        path: process.env.CERT_PATH,
    },
};
