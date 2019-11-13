import mailer from "nodemailer"
import config from '../config'

export default mailer.createTransport(config.get('yandex') || {})