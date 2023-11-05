import mongoose from "mongoose";
import VAS from "./vas.model.js";

const gamingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    vas: {
        type: mongoose.Schema.Types.ObjectId,
        ref: VAS
    }
});

export default Gaming = mongoose.model('Gaming', gamingSchema);