import { configureStore } from "@reduxjs/toolkit";
import reducer1 from './reducer/reducer';

import { middleware1 } from "./middlewares/middlewares";

export const store = configureStore({
    reducer: {
        
        loadTasks: reducer1
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(middleware1)
});
