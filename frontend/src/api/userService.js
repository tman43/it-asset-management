import apiClient from './apiClient';

const USERS_ENDPOINT = '/users';

export const getUsers = () => apiClient.get(USERS_ENDPOINT);
export const getUserById = (id) => apiClient.get(`${USERS_ENDPOINT}/${id}`);
export const createUser = (user) => apiClient.post(USERS_ENDPOINT, user);
export const updateUser = (id, user) => apiClient.put(`${USERS_ENDPOINT}/${id}`, user);
export const deleteUser = (id) => apiClient.delete(`${USERS_ENDPOINT}/${id}`);