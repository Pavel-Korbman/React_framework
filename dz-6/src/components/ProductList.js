import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideProduct, toggleProduct } from '../actions/productActions';

const ProductList = () => {  
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handleToggleProduct = (id) => {
        dispatch(toggleProduct(id));
    };

    const handleHideProduct = (id) => {
        dispatch(hideProduct(id));        
    };

    return (
        <div className="product-box">
            <h2>Продукты:</h2>
            {products.map(product => (
                <div className="product" key={product.id} style={{ display: product.visible ? 'block' : 'none' }}>
                    <p>{product.id}</p>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <h4>Цена: {product.prise} руб</h4>
                    <p
                        onClick={() => handleToggleProduct(product.id)}
                        style={{ color: product.available ? 'green' : 'red' }}
                    >{product.available ? 'доступен' : 'не доступен'}</p>
                    <button
                        onClick={() => handleHideProduct(product.id)}
                    >Удалить продукт</button>                   
                    
                </div>

            ))}
        </div>
    );
};

export default ProductList;
