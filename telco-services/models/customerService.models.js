import mongoose from 'mongoose';

const customerServiceSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
    service_id: {
        type: String,
        required: false
    },
    status: {
        type: String, // completed, pending, cancelled, deactivated
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
        required: false,
        default: 0
    }
});

const CustomerService = mongoose.model('CustomerService', customerServiceSchema);
export default CustomerService;