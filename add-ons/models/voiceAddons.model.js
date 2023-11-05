import mongoose from "mongoose";
import Service from './service.model.js';

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
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Service,
        required: true
    }
});

const VoiceAddons = mongoose.model('VoiceAddons', voiceAddonsSchema);
export default VoiceAddons;