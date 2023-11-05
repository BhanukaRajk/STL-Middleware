import mongoose from "mongoose";
import Service from './service.model.js';

const voiceAddonsSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
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
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Service,
        required: true
    }
});

export default VoiceAddons = mongoose.model('VoiceAddons', voiceAddonsSchema);