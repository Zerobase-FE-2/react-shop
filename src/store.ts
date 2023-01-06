import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartSlice from './reducers/cartSlice';
import productSlice from './reducers/productSlice';
import userSlice from './reducers/userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: ['user', 'products', 'cart'],
  storage,
};

const reducers = combineReducers({
  user: userSlice,
  products: productSlice,
  cart: cartSlice,
});
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
