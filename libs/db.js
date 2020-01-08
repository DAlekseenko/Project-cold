import {parsed} from './servUtils'
import mongoose from 'mongoose';
import config from '../config'
import logger from "./log"


(async () => {
    const uri = `mongodb://${parsed.MONGO_USER}:${parsed.MONGO_PASS}@${config.get('mongo:host')}`;
    try {
        await mongoose.connect(uri, config.get('mongo:options'))
        logger.info('CONNECTION ESTABLISHED')
    } catch (e) {
        logger.error(uri)
        logger.error('DB error:')
        logger.error(e)
    }
})()


export default mongoose