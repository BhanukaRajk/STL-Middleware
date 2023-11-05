import { apiTelco } from '.';

export const getRoamingData = async (customer_id) => {
    try {
        const response = await apiTelco.get(`/roaming/${customer_id}`);
        console.log(response);
        return response;
    } catch (err) {
        return err;
    }
}

export const activateRoamingPack = async (customer_id, service_id) => {
    try {
        const response = await apiTelco.post(`/roaming/activate/${customer_id}`, { service_id });
        return response;
    } catch (err) {
        return err;
    }
}

export const deactivateRoamingPack = async (customer_id, service_id) => {
    try {
        const response = await apiTelco.post(`/roaming/deactivate/${customer_id}`, { service_id });
        return response;
    } catch (err) {
        return err;
    }
}

export const getRoamingPacks = async () => {
    try {
        const response = await apiTelco.get('/roaming/packs');
        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }
}