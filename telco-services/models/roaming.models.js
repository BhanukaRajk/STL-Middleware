import mongoose from "mongoose";
import Service from "./service.model.js";

const roamingSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Service,
        required: true
    }
});

export default Roaming = mongoose.model('Roaming', roamingSchema);