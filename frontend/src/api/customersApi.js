import { apiTelco } from ".";

export const getCustomers = async () => {
  const response = await apiTelco.get("/");
  return response.data;
};

export const getCustomer = async (id) => {
  const response = await apiTelco.get(`/${id}`);
  return response.data;
};

export const updateFirstName = async (id, firstName) => {
  const response = await apiTelco.put(`/${id}`, { firstName });
  return response.data;
};

export const updateLastName = async (id, lastName) => {
  const response = await apiTelco.put(`/${id}`, { lastName });
  return response.data;
};

export const updateEmail = async (id, email) => {
  const response = await apiTelco.put(`/${id}`, { email });
  return response.data;
};

export const updatePhone = async (id, phone) => {
  const response = await apiTelco.put(`/${id}`, { phone });
  return response.data;
};
