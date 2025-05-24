import {API} from './index';
import {endpoints} from './constants';
import Config from 'react-native-config';
import {ApiConfig} from './types/apiConfig';
import {DiscoverMovies} from './types/discoverMovies';

export async function authenticateApp() {
  try {
    const response = await API.get(endpoints.authentication);
    return response.data;
  } catch (error: any) {
    const errorMessage = error?.message || 'Unknown error';
    return errorMessage;
  }
}
export async function apiConfiguration(): Promise<ApiConfig> {
  try {
    const response = await API.get(endpoints.configuration);
    return response.data;
  } catch (error: any) {
    const errorMessage = error?.message || 'Unknown error';
    return errorMessage;
  }
}

export async function discoverMoviesList(): Promise<DiscoverMovies> {
  try {
    const response = await API.get(endpoints.discoverMovies);
    return response.data;
  } catch (error: any) {
    const errorMessage = error?.message || 'Unknown error';
    return errorMessage;
  }
}

export async function nowPlayingMoviesList(): Promise<DiscoverMovies> {
  try {
    const response = await API.get(endpoints.nowPlayingMovies);
    return response.data;
  } catch (error: any) {
    const errorMessage = error?.message || 'Unknown error';
    return errorMessage;
  }
}
