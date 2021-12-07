import utils from '@k03mad/util';

const {print} = utils;

const MIN_ERRORS = 30;

/** @param {object} bot */
export default bot => {
    let pollingErrors = 0;

    bot.on('polling_error', err => {
        pollingErrors++;

        if (pollingErrors >= MIN_ERRORS) {
            print.ex(err, {before: `onPollingErr (count: ${pollingErrors})`});
            pollingErrors = 0;
        }
    });

    bot.on('uncaughtException', err => print.ex(err, {
        before: 'onUncaughtEx',
        exit: true,
    }));
};
