import { combineReducers } from "redux"
import cakeReducer from "./cake/cakeReducer"
import iceCreameReducer from "./iceCreame/iceCreamReducer"



const rootReducer = combineReducers({
    iceCream:iceCreameReducer,
    cake:cakeReducer
})

export default rootReducer

