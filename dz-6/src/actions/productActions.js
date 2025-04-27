export const ADD_PRODUCT = 'ADD_PRODUCT';
export const HIDE_PRODUCT = 'HIDE_PRODUCT';
export const TOGGLE_PRODUCT = 'TOGGLE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

// Создание продукта
export const addProduct = (name, description, prise) => ({
    type: ADD_PRODUCT,  // Тип действия
    payload: { name, description, prise }  // Полезная нагрузка действия
});

// Изменение доступности
export const toggleProduct = (id) => ({
    type: TOGGLE_PRODUCT,
    payload: { id }
});

// Удаление из списка
export const hideProduct = (id) => ({
    type: HIDE_PRODUCT,
    payload: { id }
});

// Изменение
// export const editProduct = (name, description, prise, editMode) => ({
//     type: EDIT_PRODUCT,  // Тип действия
//     payload: { name, description, prise, editMode }  // Полезная нагрузка действия
// });

export const editProduct = (id, name, description, prise, editMode) => ({
    type: EDIT_PRODUCT,
    payload: {id, name, description, prise, editMode }
});
