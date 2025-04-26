// Хранилище - объект, содержащий состояние приложения 
// и предоставляющий методы для его изменения
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './reducers/todosReducer'

// Настройка Redux хранилища с использованием todosReducer
const store = configureStore({
    reducer: {
        todos: todosReducer
    }
});

export default store;
