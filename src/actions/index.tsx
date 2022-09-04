// import {FILTER_ITEM} from './ActionTypes'
import * as types from './ActionTypes'

export function callapi(originaldata:any) {
  return {
    type: types.CALL_API,
    originaldata,
  };
}

export function filteritem(filterwhat:string) {
  return {
    type: types.FILTER_ITEM,
    filterwhat,
  };
}

// export function addcart() {
//   return {
//     type: types.ADD_ON_CART,
//   };
// }

export function additem() {
  return {
    type: types.ADD_ITEM,
  };
}

export function removeitem() {
  return {
    type: types.REMOVE_ITEM,
  };
}