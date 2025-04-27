import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/productActions";

const AddProduct = () => {
    // Локальное состояние для текста нового продукта
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [prise, setPrise] = useState('');

    const dispatch = useDispatch();

    const handleAddProduct = () => {
        // Отправляем действие для добавления нового продукта
        dispatch(addProduct(name, description, prise));
        setName('');
        setDescription('');
        setPrise('');
    };

    return (
        <div>
            <h2>Добавить новый продукт</h2>
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
            <button onClick={handleAddProduct}>Добавить продукт</button>

        </div>
    );
};

export default AddProduct;
