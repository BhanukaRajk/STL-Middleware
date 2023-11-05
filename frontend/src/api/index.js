import axios from "axios";

const URL_TELCO = `${import.meta.env.VITE_TELCO_API_URL}`;

export const apiTelco = axios.create({
    baseURL: URL_TELCO,
});


// api.interceptors.request.use((response) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//         response.headers.Authorization = `Bearer ${token}`;
//     }
//     return response;
// }); // Request interceptor
