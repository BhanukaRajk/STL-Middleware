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

const Gaming = mongoose.model('Gaming', gamingSchema);
export default Gaming;