import mongoose from "mongoose";

const voiceAddonsSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});

const VoiceAddons = mongoose.model('VoiceAddons', voiceAddonsSchema);
export default VoiceAddons;