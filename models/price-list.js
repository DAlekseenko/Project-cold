import mongoose from '../libs/db';

const schema = mongoose.Schema({
    service: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});

export default mongoose.model('PriceList', schema)