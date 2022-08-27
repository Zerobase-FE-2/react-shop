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


const cartReducer = (state : item[] = [], action : action) => {
    let newState : item[] = [...state];
    let selected = newState.find((item : item) => item.id === action.payload.id);
    switch (action.type) {
        case "ADD":
            if(selected){
                let product : item = selected
                product.count += 1;
                newState.concat(product)
            } else {
                newState.push(action.payload);
            }
            return newState;
        case "REMOVE":
            if(selected?.count === 1){
                newState = newState.filter(item => item.id !== selected?.id);
            } else {
                let product : any = selected
                product.count -= 1;
                newState.concat(product);
            }
            return newState;
        default:
            return newState;
    }
}
export default cartReducer;
