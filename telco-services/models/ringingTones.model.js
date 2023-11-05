import mongoose from "mongoose";
import Service from "./service.model.js";

const ringingTonesSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Service,
        required: true
    }

});

export default RingingTones = mongoose.model('RingingTones', ringingTonesSchema);