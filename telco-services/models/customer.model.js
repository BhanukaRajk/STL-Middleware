import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_no: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

export default Customer = mongoose.model('Customer', customerSchema);