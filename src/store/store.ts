import { createStore } from 'redux'

type action = {
    type : string;
    payload : {
        id : number;
        title : string;
        price : number;
        image : string;
        count : number;
    }
};

type item = {
    id : number;
    title : string;
    price : number;
    image : string;
    count : number;
};


const reducer = (state  : item[] | undefined, action : action) => {
    if(state === undefined) return [];
    let newState : item[] = [...state];
    switch (action.type) {
        case "ADD":
            if(newState.find((item : item) => item.id === action.payload.id)){
                let product : any = newState.find(item => item.id === action.payload.id);
                product.count += 1;
                newState.concat(product)
            } else {
                newState.push(action.payload);
            }
            return newState;
        case "REMOVE":
                let product : any = newState.find(item => item.id === action.payload.id);
                product.count -= 1;
                newState.concat(product);
                return newState;
        default:
            return newState;
    }
}
export default reducer;

// export const store = createStore(reducer);
