import * as cmds from './app/cmd/index.js';

const name = process.env.npm_config_name;

(async () => {
    const log = await cmds[name]();
    console.log(log);
})();
