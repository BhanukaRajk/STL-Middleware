import Customer from '../models/customer.model.js';
import { apiAddOns, apiVAS } from '../api/index.js';

export const init = async (req, res) => {
    const customers = await Customer.find({})
    res.json({ message: 'Hello from  Services API' });
}

export const vasCheck = async (req, res) => {
    const response = await apiVAS.get('/');
    res.json(response.data);
}