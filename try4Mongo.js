import Custom from './models/custom'
import logger from './libs/log'

const custom = new Custom({
    name: 'Вася',
    phone: 79654436561
})


// custom.save((error, user) => {
//     if (error) {
//         logger.error(error)
//         throw error;
//     }
//     console.log(user);
// })

async function f() {
    try {
        const result = await Custom.find({})
        console.log(result);
    }catch (e) {
        logger.error(error)
        throw error;
    }
}

f();

