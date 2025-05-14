import {configureStore} from '@reduxjs/toolkit';
import logger from './middleware/logger';
import {rootReducer} from '../reducers';
import {apiSlice} from '@src/services/api.slice';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(logger),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
