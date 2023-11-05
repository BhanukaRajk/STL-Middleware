import mongoose from "mongoose";
import Service from "./service.model.js";

const ringingTonesSchema = new mongoose.Schema({
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

const RingingTones = mongoose.model('RingingTones', ringingTonesSchema);
export default RingingTones;