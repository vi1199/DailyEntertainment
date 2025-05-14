import axios from 'axios';
import Config from 'react-native-config';

export const API = axios.create({
  baseURL: Config.API_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${Config.ACCESS_TOKEN}`,
  },
});
