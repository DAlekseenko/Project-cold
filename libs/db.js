import mongoose from 'mongoose';
import config from '../config'
import logger from "./log"

const uri = `${config.get('mongoose:prefix')}${config.get('mongoose:user')}:${config.get('mongoose:password')}@`+
`${config.get('mongoose:host')}:${config.get('mongoose:port')}/${config.get('mongoose:base')}`
console.log(uri);
mongoose.connect(uri, config.get('mongoose:options')).catch(e => {
    logger.error(e)
})


export default mongoose