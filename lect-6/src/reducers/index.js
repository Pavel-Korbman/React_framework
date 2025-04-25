import { combineReducers } from "@reduxjs/toolkit"; // ??
import counterReducer from './counterSlice';
import counter from "./counter";

const rootReducer = combineReducers({
    counter: counterReducer
});

export default rootReducer;

