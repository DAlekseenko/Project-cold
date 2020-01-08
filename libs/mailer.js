import {parsed} from './servUtils'
import mailer from "nodemailer"
import config from '../config'

const yandexConf = config.get('yandex') || {};
yandexConf.auth = {
    user: parsed.MAIL_USER,
    pass: parsed.MAIL_PASS,
}

export default mailer.createTransport(yandexConf)