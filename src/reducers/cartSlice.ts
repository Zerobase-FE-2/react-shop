import { RootState } from './../store';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './../types';

interface CartState {
  products?: {
    product: Product;
    cnt: number;
  }[];
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
      state.products?.push({ product: action.payload.product, cnt: 1 });
    },
    removeCart: (state, action: PayloadAction<{ product: Product }>) => {
      state.products?.filter(
        (product) => product.product.id !== action.payload.product.id
      );
    },
    addProduct: (state, action: PayloadAction<{ product: Product }>) => {},
    removeProduct: (state, action: PayloadAction<{ product: Product }>) => {},
  },
});

const cartState = (state: RootState) => state.cart.products;

export const getTotalPrice = createSelector(cartState, (products) => {
  return products?.reduce((acc, cur) => cur.product.price * cur.cnt + acc, 0);
});

export const { initializeCart, addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
