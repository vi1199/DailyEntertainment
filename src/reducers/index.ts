import {combineReducers} from 'redux';
import appSlice from './app.slice';
import {apiSlice} from '@src/services/api.slice';

export const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  appSlice: appSlice,
});
