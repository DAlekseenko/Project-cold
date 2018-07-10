const nConf = require('nconf');
const path = require('path');

module.exports = nConf
    .argv()
    .env()
    .file('db', path.join(__dirname, 'db-config.json'))
    .file('secret', path.join(__dirname, 'db-secret.json'))
    .file('app', path.join(__dirname, `config.${(nConf.get('NODE_ENV') || '').trim()}.json`))

