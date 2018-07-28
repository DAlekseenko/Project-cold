export function preparePhone (phone) {
    return phone.replace(/[^\d]/g, '')
}