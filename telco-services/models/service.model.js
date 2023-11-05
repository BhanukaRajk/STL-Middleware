import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

export default Service = mongoose.model('Service', serviceSchema);