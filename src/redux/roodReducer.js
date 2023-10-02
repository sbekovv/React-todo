import {combineReducers} from "redux";
import {operationsReducer} from "./todoApp/reducers/Operations.jsx";


export const roodReducer = combineReducers({
    operationsReducer,
});

