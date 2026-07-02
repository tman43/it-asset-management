import apiClient from './apiClient';

const ASSIGNMENTS_ENDPOINT = '/assignments';

export const getAssignments = () => apiClient.get(ASSIGNMENTS_ENDPOINT);
export const getAssignmentById = (id) => apiClient.get(`${ASSIGNMENTS_ENDPOINT}/${id}`);
export const createAssignment = (assignment) => apiClient.post(ASSIGNMENTS_ENDPOINT, assignment);
export const updateAssignment = (id, assignment) => apiClient.put(`${ASSIGNMENTS_ENDPOINT}/${id}`, assignment);
export const deleteAssignment = (id) => apiClient.delete(`${ASSIGNMENTS_ENDPOINT}/${id}`);