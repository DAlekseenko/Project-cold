import mailer from "nodemailer"
import config from '../config'

const yandexConf = config.get('yandex') || {};
yandexConf.auth = {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
}

export default mailer.createTransport(yandexConf)