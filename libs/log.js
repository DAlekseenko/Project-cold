import winston from 'winston';
import config from '../config';
import path from 'path';

const mode = config.get('NODE_ENV') && config.get('NODE_ENV').trim();

const d = new Date();

const day = d.getDate();

const month = d.getMonth() + 1;

const year = d.getFullYear();

const date = `${year}-${month}-${day}`

const options = {
    file: {
        level: 'error',
        filename: path.join(process.cwd(), 'logs', `${date}.log`),
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: mode === 'development' ? 'debug' : 'warn',
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


