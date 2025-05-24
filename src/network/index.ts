import axios, {AxiosError, AxiosResponse} from 'axios';
import Config from 'react-native-config';

const TokenManager = {
  getAccessToken: () => Config.ACCESS_TOKEN,
};

export const API = axios.create({
  baseURL: Config.API_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
  },
});

API.interceptors.request.use(
  config => {
    const token = TokenManager.getAccessToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

API.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    // Handle 401 Unauthorized errors (token expired)
    if (error.response?.status === 401) {
      // Attempt to refresh token
      // await TokenManager.refreshToken();
      // Could retry the request with the new token
    }

    // Log errors - React Native compatible approach
    if (__DEV__) {
      console.error('API Error:', error);
    }

    return Promise.reject(error);
  },
);
