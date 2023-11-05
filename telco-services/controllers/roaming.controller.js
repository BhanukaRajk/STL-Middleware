import CustomerService from '../models/customerService.models.js';
import Roaming from '../models/roaming.model.js';

export const getRoamingData = async (req, res) => {
    try {
        const { customer_id } = req.params;
        const roamingData = await CustomerService.find({ customer_id: customer_id });
        res.json({ message: 'Hello from  Services API' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const activateRoamingPack = (req, res) => {
    res.json({ message: 'Hello from  Services API' });
}

export const deactivateRoamingPack = (req, res) => {
    res.json({ message: 'Hello from  Services API' });
}