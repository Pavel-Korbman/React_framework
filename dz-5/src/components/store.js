import { configureStore } from "@reduxjs/toolkit";

const reducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return !state;     
        default:
            return state;
    }
};

const store = configureStore({ reducer: reducer });

export default store;
