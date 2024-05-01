import {configureStore} from '@reduxjs/toolkit';
import logger from './middleware/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import {rootReducer} from '../reducers';
import {apiSlice} from '@src/services/api.slice';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware, logger),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
