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

const initState : item[] = []


const cartReducer = (state = initState, action : action) => {
    let newState : item[] = [...state];
    switch (action.type) {
        case "ADD":
            if(newState.find((item : item) => item.id === action.payload.id)){
                const idx = newState.findIndex((item : item) => item.id === action.payload.id);
                newState[idx].count += 1;
            } else {
                newState.push(action.payload);
            }
            return newState;
        case "REMOVE":
            const idx = newState.findIndex((item : item) => item.id === action.payload.id);
            if(newState[idx].count === 1){
                newState = newState.filter(item => item.id !== newState[idx].id);
            } else {
                newState[idx].count -= 1;
            }
            return newState;
        default:
            return state;
    }
}
export default cartReducer;
