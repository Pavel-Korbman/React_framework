import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideProduct, toggleProduct } from '../actions/productActions';
import ProductEdit from "./ProductEdit";



const ProductList = () => {
    // Получаем список продуктов из Redux хранилища
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();


    const handleToggleProduct = (id) => {
        // отправляем действие для изменения доступности продукта
        dispatch(toggleProduct(id));
    };

    const handleHideProduct = (id) => {
        // отправляем действие для изменения доступности продукта
        dispatch(hideProduct(id));
        // products.filter(element => element.visible !== false);
    };

    return (
        <div className="product-box">
            <h2>Продукты:</h2>
            {products.map(product => (
                <div className="product" style={{ display: product.visible ? 'block' : 'none' }}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <h4>Цена: {product.prise} руб</h4>
                    <p
                        onClick={() => handleToggleProduct(product.id)}
                        style={{ textDecoration: product.available ? 'none' : 'line-through' }}
                    >доступен</p>
                    <button
                        onClick={() => handleHideProduct(product.id)}
                    >Удалить продукт</button>
                    <button
                    // onClick={() => handleHideProduct(product.id)}
                    >Изменить продукт</button>
                    <ProductEdit />
                </div>

            ))}
        </div>
    );
};

export default ProductList;
