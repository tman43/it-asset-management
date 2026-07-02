import apiClient from './apiClient';

const ASSETS_ENDPOINT = '/assets';

export const getAssets = () => apiClient.get(ASSETS_ENDPOINT);
export const getAssetById = (id) => apiClient.get(`${ASSETS_ENDPOINT}/${id}`);
export const createAsset = (asset) => apiClient.post(ASSETS_ENDPOINT, asset);
export const updateAsset = (id, asset) => apiClient.put(`${ASSETS_ENDPOINT}/${id}`, asset);
export const deleteAsset = (id) => apiClient.delete(`${ASSETS_ENDPOINT}/${id}`);