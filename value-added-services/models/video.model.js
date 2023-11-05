import mongoose from "mongoose";
import VAS from "./vas.model.js";

const videoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    vas: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VAS'
    }
});

const Video = mongoose.model('Video', videoSchema);
export default Video;