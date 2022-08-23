import { combineReducers } from "redux"
import itemFilter from './itemFilter'
import cartReducer from './cartReducer'

const reducers = combineReducers({
  itemList: itemFilter, cart: cartReducer,
});

export default reducers;
