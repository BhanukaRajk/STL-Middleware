import mongoose from "mongoose";
import Service from "./service.model.js";

const dataAddonsSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    duration: { // in days
        type: Number,
        required: true
    },
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Service,
        required: true
    }
});


const DataAddons = mongoose.model('DataAddons', dataAddonsSchema);
export default DataAddons;