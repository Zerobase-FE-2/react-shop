import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/productSlice';
import userSlice from './reducers/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    products: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
