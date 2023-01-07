import { RootState } from './../store';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './../types';

interface CartState {
  products?: {
    id: number;
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
      state.products?.push({
        product: action.payload.product,
        cnt: 1,
        id: action.payload.product.id,
      });
    },
    removeCart: (
      state,
      action: PayloadAction<{ id: number; product: Product; cnt: number }>
    ) => {
      state.products = state.products?.filter(
        (product) => product.product.id !== action.payload.id
      );
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products = state.products?.map((product) => {
        if (product.product.id === action.payload.id) {
          return { ...product, cnt: product.cnt + 1 };
        }
        return product;
      });
    },

    removeProduct: (state, action: PayloadAction<Product>) => {
      state.products = state.products?.map((product) => {
        if (product.product.id === action.payload.id) {
          return { ...product, cnt: product.cnt - 1 };
        }
        return product;
      });
    },
  },
});

const cartState = (state: RootState) => state.cart.products;

export const getTotalPrice = createSelector(cartState, (products) => {
  return products?.reduce((acc, cur) => cur.product.price * cur.cnt + acc, 0);
});

export const {
  initializeCart,
  addCart,
  removeCart,
  addProduct,
  removeProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
