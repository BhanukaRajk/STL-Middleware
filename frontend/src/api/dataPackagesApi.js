import { apiTelco } from "."

export const insertDataPackage = async (dataPackage) => {
    const response = await apiTelco.post('/api/addOns/data-packs', dataPackage)
    return response.data
}

export const addDataPackage = async (dataPackage) => {
    const response = await apiTelco.post('/api/addOns/add/data-packs', dataPackage)
    return response.data
}