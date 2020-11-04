import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const baseURL = 'https://httpbin.org/get';

const api = axios.create({
  baseURL: baseURL,
  timeout: 15000,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  config.headers.Authorization = token ? `JWT ${token}` : '';
  return config;
});

export default api;
