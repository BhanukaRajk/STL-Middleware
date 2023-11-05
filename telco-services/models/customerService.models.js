import mongoose from 'mongoose';
import Customer from './customer.model.js';

const customerServiceSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Customer,
        required: true
    },
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    status: {
        type: String, // completed, pending, cancelled
        required: true
    },
    type: {         // data, voice, vas, roaming, ringing
        type: String,
        required: true
    },
    date_subscribed: {
        type: Date,
        required: true
    },
    date_unsubscribed: {
        type: Date,
        required: false
    },
    remaining_quantity: {
        type: Number,
        required: false
    },
    remaining_duration: {
        type: Number,
        required: false
    }
});

const CustomerService = mongoose.model('CustomerService', customerServiceSchema);
export default CustomerService;