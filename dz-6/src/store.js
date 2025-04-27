import { configureStore } from "@reduxjs/toolkit";
import productReducer from './reducers/productReducer';

// Настройка Redux хранилища с использованием todosReducer
const store = configureStore({
    reducer: {
        products: productReducer
    }
});

export default store;
