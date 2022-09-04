

export const modeReducer = (state : string = "light", action : {type : string, payload : string}) => {
    if(action.type === "CHANGE"){
        state = action.payload
    }
    return state;
}