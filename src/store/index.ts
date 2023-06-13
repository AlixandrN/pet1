import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import accountSlice from './reducers/accountSlice';
import languageSlice from './reducers/languageSlice';


const rootReducer = combineReducers({
    accountSlice,
    languageSlice
})

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(geocodingMiddleware).concat(registrationDataAPI.middleware)
    // getDefaultMiddleware().concat([rootAPI.middleware, geocodingMiddleware])
  });

export const store = setupStore();
export type RootReducerState = ReturnType<typeof rootReducer>;
export type AppStoreState = ReturnType<typeof setupStore>;

type AppDispatchState = AppStoreState['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatchState>();
