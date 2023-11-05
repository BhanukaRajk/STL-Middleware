import CustomerService from '../models/customerService.models.js';
import Roaming from '../models/roaming.model.js';

export const getRoamingData = async (req, res) => {
    try {
        const { customer_id } = req.params;
        const roamingData = await CustomerService.find({ customer_id, type: 'roaming' });
        const roamingDataWithService = await Promise.all(roamingData.map(async (roaming) => {
            const service = await Roaming.findById(roaming.service_id);
            return { ...roaming._doc, service };
        }
        ));
        console.log(roamingDataWithService);
        res.json(roamingDataWithService);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getRoamingPacks = async (req, res) => {
    try {
        const roamingPacks = await Roaming.find();
        console.log(roamingPacks);
        res.status(200).json(roamingPacks);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

export const activateRoamingPack = async (req, res) => {
    try {
        const { customer_id } = req.params;
        const { service_id } = req.body;
        const dataService = await Roaming.findById(service_id);
        console.log(dataService);
        const roamingPack = new CustomerService({
            customer_id,
            service_id,
            status: 'pending',
            type: 'roaming',
            date_subscribed: Date.now(),
            remaining_duration: dataService.duration,
        });
        await roamingPack.save();
        res.status(200).json(roamingPack);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deactivateRoamingPack = async (req, res) => {
    try {
        const { customer_id } = req.params;
        const { service_id } = req.params;

        const customerService = await CustomerService.updateOne(
            { customer_id, service_id },
            {
                status: 'deactivated',
                date_unsubscribed: Date.now()
            });
        res.status(200).json(customerService);
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
}

