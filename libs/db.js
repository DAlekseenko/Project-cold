import dotenv from 'dotenv';
import mongoose from 'mongoose';
import config from '../config'
import logger from "./log"

const result = dotenv.config({debug: true})

if (result.error) {
    throw result.error
}

console.log(result.parsed)

const {
    MONGO_USER,
    MONGO_PASS
} = process.env;
const uri = `mongodb://${MONGO_USER}:${MONGO_PASS}@${config.get('mongo:host')}`;

(async () => {
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