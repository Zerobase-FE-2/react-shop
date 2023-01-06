import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './../types';

interface CartState {
  products?: Product[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initializeCart: (state, action: PayloadAction<{ product: Product }>) => {
      state.products = [];
    },
    addCart: (state, action: PayloadAction<{ product: Product }>) => {
      console.log(action.payload);
      state.products?.push(action.payload.product);
    },

    removeCart: (state, action: PayloadAction<{ product: Product }>) => {
      state.products?.filter(
        (product) => product.id !== action.payload.product.id
      );
    },
  },
});

export const { initializeCart, addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
