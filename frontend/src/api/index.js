import axios from "axios";

const URL_TELCO = `${import.meta.env.VITE_TELCO_API_URL}`;

export const apiTelco = axios.create({
    baseURL: URL_TELCO,
});


apiTelco.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem("token");
        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }

        return request;
    }
); // Request interceptor
