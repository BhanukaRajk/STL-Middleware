import Customer from '../models/customer.model.js';
import { apiAddOns } from '../api/index.js';

export const init = async (req, res) => {
    const customers = await Customer.find({})
    res.json({ message: 'Hello from  Services API' });
}