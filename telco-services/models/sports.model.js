import mongoose from "mongoose";
import VAS from "./vas.model.js";

const sportsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    vas: {
        type: mongoose.Schema.Types.ObjectId,
        ref: VAS
    }
});

export default Sports = mongoose.model('Sports', sportsSchema);