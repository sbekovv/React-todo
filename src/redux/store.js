import {createStore} from "redux";
import {roodReducer} from "./roodReducer.js";

export const store = createStore(
    roodReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)