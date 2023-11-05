import mongoose from 'mongoose';
import Customer from './customer.model.js';
import Service from './service.model.js';

const customerServiceSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Customer,
        required: true
    },
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Service,
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

export default CustomerService = mongoose.model('CustomerService', customerServiceSchema);