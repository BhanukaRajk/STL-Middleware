import mongoose from "mongoose";

const vasSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});

const VAS = mongoose.model('VAS', vasSchema);
export default VAS;