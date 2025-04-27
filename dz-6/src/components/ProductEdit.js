import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../actions/productActions";

const ProductEdit = () => {
    // Локальное состояние для нового продукта
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [prise, setPrise] = useState('');
    const [editMode, setEditMode] = useState(true);

    const dispatch = useDispatch();

    const handleEditProduct = () => {
        // Отправляем действие для изменения продукта
        dispatch(editProduct(name, description, prise, editMode));
        // setName('');
        // setDescription('');
        // setPrise('');
        setEditMode(false);
    };

    return (
        <div className="product-edit" style={{ display: editMode ? 'block' : 'none' }}>
            <h2>Изменить продукт</h2>
            <input
                id="product-name"
                type="text"
                value={name}
                placeholder="Название продукта"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                id="product-description"
                type="text"
                value={description}
                placeholder="Описание продукта"
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                id="product-prise"
                type="text"
                value={prise}
                placeholder="Цена продукта"
                onChange={(e) => setPrise(e.target.value)}
            />
            <button onClick={handleEditProduct}>Сохранить</button>

        </div>
    );
};

export default ProductEdit;
