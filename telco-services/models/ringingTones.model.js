import mongoose from "mongoose";

const ringingTonesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});

const RingingTones = mongoose.model('RingingTones', ringingTonesSchema);
export default RingingTones;