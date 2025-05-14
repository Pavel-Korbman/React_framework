import { configureStore } from "@reduxjs/toolkit";
import programsReducer from './reducers/programsReducer';

const store = configureStore({
    reducer: {
        program: programsReducer
    }
});

export default store;

