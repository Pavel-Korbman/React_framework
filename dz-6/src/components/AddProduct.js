import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/productActions";

const AddProduct = () => {    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [prise, setPrise] = useState('');

    const dispatch = useDispatch();

    const handleAddProduct = () => {       
        if (name !=='' && description!=='' && prise!=='') {
            dispatch(addProduct(name, description, prise));
        setName('');
        setDescription('');
        setPrise('');
        }
        
    };

    return (
        <form>
            <h2>Добавить новый продукт</h2>
            <input
                id="product-name"
                type="text"
                value={name}
                placeholder="Название продукта"                
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                id="product-description"
                type="text"
                value={description}
                placeholder="Описание продукта"                
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                id="product-prise"
                type="text"
                value={prise}
                placeholder="Цена продукта"                
                onChange={(e) => setPrise(e.target.value)}
                required
            />
            <button onClick={handleAddProduct}>Добавить продукт</button>

        </form>
    );
};

export default AddProduct;
