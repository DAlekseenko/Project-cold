import winston from 'winston';
import config from '../config';

const mode = config.get('NODE_ENV') && config.get('NODE_ENV').trim();

const d = new Date();

const day = d.getDate();

const month = d.getMonth() + 1;

const year = d.getFullYear();

const date = `${year}-${month}-${day}`
console.log(__dirname);
console.log(`${__dirname}/../logs/${date}.log`)
const options = {
    file: {
        level: 'info',
        filename: `${__dirname}/../logs/${date}.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: mode === 'development' ? 'debug' : 'error',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};

const logger = new (winston.Logger)({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false,

});

logger.stream = {
    write: (message, encoding) => {
        logger.info(message);
    }
}


export default logger;


