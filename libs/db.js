import mongoose from 'mongoose';
import config from '../config'
import logger from "./log"

const uri = `${config.get('mongo:prefix')}${config.get('mongo:user')}:${config.get('mongo:password')}@` +
    `${config.get('mongo:host')}:${config.get('mongo:port')}/${config.get('mongo:base')}`

mongoose.connect(uri, config.get('mongo:options')).then(() =>
    logger.info('CONNECTION ESTABLISHED')
).catch(e => {
    logger.error('DB error:')
    logger.error(e)
})

export default mongoose