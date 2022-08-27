import { combineReducers } from "redux"
import itemFilter from './itemFilter'
import cartReducer from './cartReducer'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key : 'root',
  storage,
};

const reducers = combineReducers({
  itemList: itemFilter,
  cart: cartReducer,
});

export default persistReducer(persistConfig, reducers);
