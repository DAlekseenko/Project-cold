const nConf = require('nconf');
const path = require('path');

function getPath(filename) {
    return path.join(process.cwd(), 'config', filename)
}

module.exports = nConf
    .argv()
    .env()
    .file('secret', getPath('db-secret.json'))
    .file('mail', getPath('mail-config.json'))
    .file('app', getPath(`config.${(process.env.NODE_ENV || '').trim()}.json`))

