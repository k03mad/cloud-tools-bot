import utils from '@k03mad/utils';
import path from 'node:path';
import TelegramBot from 'node-telegram-bot-api';

import env from '../../env.js';

const {telegram, cloud, cert} = env;
const {print} = utils;

let config;

if (cloud.is) {
    const bot = new TelegramBot(telegram.token, {
        webHook: {
            port: telegram.port,
            key: path.join(cert.path, cloud.domain, 'privkey.pem'),
            cert: path.join(cert.path, cloud.domain, 'fullchain.pem'),
        },
    });

    bot
        .setWebHook(`https://${cloud.domain}:${telegram.port}/bot${telegram.token}`)
        .catch(err => print.ex(err, {
            before: 'setWebHookErr',
            exit: true,
        }));

    config = bot;
} else {
    config = new TelegramBot(telegram.token, {polling: true});
}

export default config;
