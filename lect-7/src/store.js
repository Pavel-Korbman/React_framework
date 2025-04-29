import { configureStore } from "@reduxjs/toolkit";
import reducer1 from './components/reducer';
import { middleware1 } from "./components/middlewares";
import { middleware2 } from "./components/middlewares";

export const store = configureStore({
    reducer: {
        hiText: reducer1
    },
    middleware: (getDefaultMiddlware)=> getDefaultMiddlware().concat(middleware1, middleware2)     
});
