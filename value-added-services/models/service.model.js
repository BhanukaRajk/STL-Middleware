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

const Service = mongoose.model('Service', serviceSchema);
export default Service;