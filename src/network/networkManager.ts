import {API} from './index';
import {endpoints} from './constants';
import Config from 'react-native-config';

export async function authenticateApp() {
  try {
    const response = await API.get(endpoints.authentication);
    return response;
  } catch (error) {
    return {error};
  }
}

export async function discoverMoviesList() {
  try {
    const response = await API.get(endpoints.discoverMovies);
    return response.data;
  } catch (error) {
    return {error};
  }
}
