import mongoose from '../libs/db';


const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model('Custom', schema)