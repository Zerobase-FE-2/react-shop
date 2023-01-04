import { RootState } from './../store';
import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    return await (await fetch('https://fakestoreapi.com/products')).json();
  }
);
export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rating: number; count: number };
  title: string;
}
interface ProductsState {
  products: Product[];
  loading: boolean;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending.type]: (state, action) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchProducts.rejected.type]: (state, action: PayloadAction<{}>) => {
      state.loading = false;
      state.products = [];
    },
  },
});

const productsState = (state: RootState) => state.products.products;

export const getFashionProducts = createSelector(productsState, (products) => {
  return products.filter((product) =>
    product.category.split(' ').includes('clothing')
  );
});

export const getElectronicsProducts = createSelector(
  productsState,
  (products) => {
    return products.filter((product) =>
      product.category.includes('electronics')
    );
  }
);

export const getAccesoryProducts = createSelector(productsState, (products) => {
  return products.filter((product) => product.category.includes('jewelery'));
});

export const getSelectedProduct = (id: number) =>
  createSelector(productsState, (products) => {
    return products.filter((product) => product.id === id);
  });

export default productSlice.reducer;
