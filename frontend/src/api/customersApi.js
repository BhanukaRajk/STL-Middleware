import { apiTelco } from ".";

export const getCustomers = async () => {
  const response = await apiTelco.get("/");
  return response.data;
};

export const getCustomer = async (id) => {
  const response = await apiTelco.get(`/profile/${id}`);
  return response.data;
};

export const updateFirstName = async (id, firstName) => {
  console.log(id, firstName);
  const response = await apiTelco.put(`/profile/first-name/${id}`, {
    firstName,
  });
  return response.data;
};

export const updateLastName = async (id, lastName) => {
  const response = await apiTelco.put(`/profile/last-name/${id}`, {
    lastName,
  });
  return response.data;
};

export const comparePassword = async (id, password) => {
  const response = await apiTelco.post(`/profile/password/${id}`, { password });
  return response.data;
};

export const updateEmail = async (id, email) => {
  const response = await apiTelco.put(`/profile/email/${id}`, { email });
  return response.data;
};

export const updatePassword = async (id, password) => {
  const response = await apiTelco.put(`/profile/new-password/${id}`, {
    password,
  });
  return response.data;
};
