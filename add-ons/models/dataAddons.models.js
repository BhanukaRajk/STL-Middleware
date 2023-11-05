import mongoose from "mongoose";

const dataAddonsSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    duration: { // in days
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});


const DataAddons = mongoose.model('DataAddons', dataAddonsSchema);
export default DataAddons;