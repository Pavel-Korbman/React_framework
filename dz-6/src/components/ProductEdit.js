import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../actions/productActions";

const ProductEdit = () => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [prise, setPrise] = useState(''); 
  
    const dispatch = useDispatch();

    const handleEditProduct = () => {
        if (id !== '' && name !== '' && description !== '' && prise !== '') {
            dispatch(editProduct(id, name, description, prise));
        }       
        setName('');
        setDescription('');
        setPrise('');
    };

    return (
        <form className="product-edit">
            <h2>Изменить продукт</h2>
            <input
                id="id"
                type="text"
                value={id}
                placeholder="id продукта"
                required
                onChange={(e) => setId(e.target.value)}
            />
            <input
                id="new-name"
                type="text"
                value={name}
                placeholder="Название продукта"
                required
                onChange={(e) => setName(e.target.value)}
            />
            <input
                id="new-description"
                type="text"
                value={description}
                placeholder="Описание продукта"
                required
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                id="new-prise"
                type="text"
                value={prise}
                placeholder="Цена продукта"
                required
                onChange={(e) => setPrise(e.target.value)}
            />
            <button onClick={handleEditProduct}>Сохранить</button>            

        </form>
    );
};

export default ProductEdit;
