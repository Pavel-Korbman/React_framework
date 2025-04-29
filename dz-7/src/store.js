import { configureStore } from "@reduxjs/toolkit";

import reducer1 from './reducer/reducer';

import { middleware1 } from "./middlewares/middlewares";

// Изменение state получилось только с middleware1 !!!

export const store = configureStore({
    reducer: {        
        loadTasks: reducer1
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(middleware1)
});

