import * as types from '../actions/ActionTypes';

const initialState:any = [];

export default function itemFilter(state = initialState, action:any){
  switch (action.type) {
    case 'CALL_API':
      return {
        state:[...action.originaldata],
      }

    // case 'FILTER_ITEM':
    //   if (action.filterwhat == 'fasion'){
    //     return {
    //       state: [ state.filter((item:any) => item.category === "men's clothing" || item.category === "women's clothing")]
    //     }
    //   }else return {...state}
    
    default:
      return state;
  }
}

// const productListApi = 'https://fakestoreapi.com/products';

// async function fetcher(url:string){
//   const result = await axios.get(url)
  
//   // console.log(result.data);
//   return result.data;
// }
// const {data: docs, error} = useSWR('post', () => fetcher(productListApi));
// interface dataType {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: {
//       rate: number;
//       count: number;
//   }
// }