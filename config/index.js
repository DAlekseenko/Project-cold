const nConf = require('nconf');
const path = require('path');

module.exports = nConf
    .argv()
    .env()
    .file(
        {file: path.join(__dirname, `config.${nConf.get('NODE_ENV').trim()}.json`)}
    );

