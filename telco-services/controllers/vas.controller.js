import CustomerService from '../models/customerService.models.js';
import { apiVAS } from '../api/index.js';


export const getVasServices = async (req, res) => {
    try {
        const { type } = req.params;
        if(type === 'games') {
            const response = await apiVAS.get(`/vas/games`);
            res.json(response.data);
        } else if(type === 'news') {
            const response = await apiVAS.get(`/vas/news`);
            res.json(response.data);
        } else if(type === 'video') {
            const response = await apiVAS.get(`/vas/video`);
            res.json(response.data);
        } else if(type === 'sports') {
            const response = await apiVAS.get(`/vas/sports`);
            res.json(response.data);
        } else {
            const response = await apiVAS.get(`/vas/all`);
            res.json(response.data);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const activateVasPack = async (req, res) => {
    try {
        const { customer_id } = req.params;
        const { type, vas_id } = req.body;
        const today = new Date();

        const customerService = new CustomerService({
            customer_id: customer_id,
            type: type,
            date_subscribed: today,
            status: 'pending',
            service_id: vas_id
        });
        await customerService.save();

        res.json({ message: 'Hello from Services API' });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deactivateVasPack = async (req, res) => {
    try {
        const { customer_id, type, vas_id } = req.params;
        const today = new Date();

        const lastService = await CustomerService.findOne({ customer_id, service_id: vas_id }).sort({ date_subscribed: -1 });
        if (!lastService) {
            return res.status(404).json({ message: 'No matching service found' });
        }

        lastService.status = 'cancelled';
        lastService.date_unsubscribed = today;
        await lastService.save();

        res.json({ message: 'Service cancelled successfully' });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}