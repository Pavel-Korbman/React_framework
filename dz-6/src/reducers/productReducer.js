import { ADD_PRODUCT, TOGGLE_PRODUCT, HIDE_PRODUCT, EDIT_PRODUCT } from '../actions/productActions';

const initialState = [];

// Редюсер для обработки действий с продуктом
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            // Добавляем новый продукт
            return [...state, {
                id: Date.now(),
                name: action.payload.name,
                description: action.payload.description,
                prise: action.payload.prise,
                available: true,
                visible: true,
                editMode: false
            }];
        case TOGGLE_PRODUCT:
            // Изменяем доступность продукта
            return state.map(product =>
                product.id === action.payload.id ? { ...product, available: !product.available } : product
            );
        case HIDE_PRODUCT:
            // Изменяем видимость продукта
            return state.map(product =>
                product.id === action.payload.id ? { ...product, visible: false } : product
            );
        case EDIT_PRODUCT:
            // Изменяем продукт
            return state.map(product =>
                product.id === action.payload.id ? { ...product, 
                    name: action.payload.name,
                    description: action.payload.description,
                    prise: action.payload.prise,
                    editMode: action.payload.editMode  
                 } : product
            );
            // return [...state, {
            //     name: action.payload.name,
            //     description: action.payload.description,
            //     prise: action.payload.prise,
            //     editMode: action.payload.editMode                               
            // }];
        default:
            return state;
    }
};

export default productReducer;
