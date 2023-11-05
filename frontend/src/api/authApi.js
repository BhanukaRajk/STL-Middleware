import { apiTelco } from ".";

export const login = async (email, password) => {
    try {
        const response = await apiTelco.post('/auth/login', { email, password });

        if (response.status === 200) {
            console.log(response.data);
            return response.data.token;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const signup = async (firstName, lastName, phoneNo, email, password) => {
    try {
        const response = await apiTelco.post('/auth/signup', { firstName, lastName, phoneNo, email, password });

        if (response.status === 201) {
            return response.data.customer;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const logout = async () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
}

export const testAuth = async () => {
    try {
        const response = await apiTelco.get('/auth/test');

        if (response.status === 200) {
            console.log(response.data);
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}