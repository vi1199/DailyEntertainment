import {API} from './index';
import {endpoints} from './constants';
import Config from 'react-native-config';
import {ApiConfig} from './types/apiConfig';
import {discoverMovies} from './types/discoverMovies';

export async function authenticateApp() {
  try {
    const response = await API.get(endpoints.authentication);
    return response.data;
  } catch (error) {
    return {error};
  }
}
export async function apiConfiguration() {
  try {
    const response = await API.get<ApiConfig>(endpoints.configuration);
    console.log('getConfiguration', response);

    return response.data;
  } catch (error) {
    return {error};
  }
}

export async function discoverMoviesList() {
  try {
    const response = await API.get<discoverMovies>(endpoints.discoverMovies);
    return response.data;
  } catch (error) {
    return {error};
  }
}
