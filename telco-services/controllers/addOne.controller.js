import mongoose from 'mongoose';
import CustomerService from '../models/customerService.models.js';

export const addDataPack = async (req, res) => {
    try {
        var data = req.body;
        console.log(data);

        const currentDate = new Date(); 

        // Convert data.customerId to a valid ObjectId
        const customerId = mongoose.Types.ObjectId(data.customerId);

        const customerService = new CustomerService({
            customer_id: customerId, // Use the valid ObjectId
            status: "pending",
            type: "data",
            date_subscribed: currentDate, 
            date_unsubscribed: currentDate,
            remaining_quantity: data.packageSize,
            remaining_duration: data.duration
        });
        await customerService.save();
        res.json({ message: 'Data Pack Added Successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}


export const addAddDataPack = async (req, res) => {
    console.log("addAddDataPack");
}