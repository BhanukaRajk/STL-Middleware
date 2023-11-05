import { apiTelco } from "."

export const getCustomers = async () => {
    const response = await apiTelco.get('/')
    return response.data
}
