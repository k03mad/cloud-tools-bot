import * as cmds from './app/cmd/index.js';

const name = process.env.npm_config_name;

(async () => {
    const log = await cmds[name]();
    // eslint-disable-next-line no-console
    console.log(log);
})();
