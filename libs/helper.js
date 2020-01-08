import dotenv from "dotenv"

export const {parsed, error} = dotenv.config({debug: true})

export function preparePhone(phone) {
    return phone.replace(/[^\d]/g, '')
}



