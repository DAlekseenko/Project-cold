const nConf = require('nconf');
const path = require('path');

module.exports = nConf
    .argv()
    .env()
    .file('secret', path.join(__dirname, 'db-secret.json'))
    .file('mail', path.join(__dirname, 'mail-config.json'))
    .file('app', path.join(__dirname, `config.${(nConf.get('NODE_ENV') || '').trim()}.json`))

