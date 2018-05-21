import winston from 'winston';
import config from '../config';
import path from "app-root-path"

const mode = config.get('NODE_ENV') && config.get('NODE_ENV').trim();
const date = (new Date()).toLocaleDateString();
const options = {
    file: {
        level: 'info',
        filename: `${path}/logs/${date}.log`,
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


