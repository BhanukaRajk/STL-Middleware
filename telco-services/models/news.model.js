import mongoose from "mongoose";
import VAS from "./vas.model.js";

const newsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    vas: {
        type: mongoose.Schema.Types.ObjectId,
        ref: VAS
    }
});

export default News = mongoose.model('News', newsSchema);