import { BUY_ICECREAM } from "./iceCreateTypes"


const initialState = {
     numberOfIceCream : 10
}


const iceCreameReducer = (state = initialState,action) => {
switch(action.type){
    case BUY_ICECREAM: 
    return {
        ...state,
        numberOfIceCream : state.numberOfIceCream - 1
    }
    default: return state
    }
}

export default iceCreameReducer