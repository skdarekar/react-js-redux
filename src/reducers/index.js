import  counter  from "./counter";
import  isLogged  from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter : counter,
    isLogged : isLogged
});

export default allReducers;