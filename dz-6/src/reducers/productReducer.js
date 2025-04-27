import { ADD_PRODUCT, TOGGLE_PRODUCT, HIDE_PRODUCT, EDIT_PRODUCT } from '../actions/productActions';

const initialState = [];

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:        
            return [...state, {
                id: `ID${Date.now()}`,
                name: action.payload.name,
                description: action.payload.description,
                prise: action.payload.prise,
                available: true,
                visible: true                
            }];
        case TOGGLE_PRODUCT:           
            return state.map(product =>
                product.id === action.payload.id ? { ...product, available: !product.available } : product
            );
        case HIDE_PRODUCT:           
            return state.map(product =>
                product.id === action.payload.id ? { ...product, visible: false } : product
            );
        case EDIT_PRODUCT:            
            return state.map(product =>
                product.id === action.payload.id ? {...product,
                    name: action.payload.name,
                    description: action.payload.description,
                    prise: action.payload.prise                                      
                } : product);            
           
        default:
            return state;
    }
};

export default productReducer;
