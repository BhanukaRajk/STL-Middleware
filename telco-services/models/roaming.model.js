import mongoose from "mongoose";

const roamingSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});

const Roaming = mongoose.model('Roaming', roamingSchema);
export default Roaming;