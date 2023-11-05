import { apiTelco } from "."

export const getAllServices = async () => {
    const response = await apiTelco.get('/vas/all')
    return response.data
}

export const getNewsServices = async () => {
    const response = await apiTelco.get('/vas/news')
    return response.data
}

export const getVideoServices = async () => {
    const response = await apiTelco.get('/vas/video')
    return response.data
}

export const getSportServices = async () => {
    const response = await apiTelco.get('/vas/sports')
    return response.data
}

export const getGamingServices = async () => {
    const response = await apiTelco.get('/vas/games')
    return response.data
}
