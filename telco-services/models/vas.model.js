import mongoose from "mongoose";
import Service from "./service.model.js";

const vasSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Service,
        required: true
    }
});

export default VAS = mongoose.model('VAS', vasSchema);