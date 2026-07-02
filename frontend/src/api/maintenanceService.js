import apiClient from './apiClient';

const MAINTENANCE_ENDPOINT = '/maintenance';

export const getMaintenanceLogs = () => apiClient.get(MAINTENANCE_ENDPOINT);
export const getMaintenanceLogById = (id) => apiClient.get(`${MAINTENANCE_ENDPOINT}/${id}`);
export const createMaintenanceLog = (log) => apiClient.post(MAINTENANCE_ENDPOINT, log);
export const updateMaintenanceLog = (id, log) => apiClient.put(`${MAINTENANCE_ENDPOINT}/${id}`, log);
export const deleteMaintenanceLog = (id) => apiClient.delete(`${MAINTENANCE_ENDPOINT}/${id}`);