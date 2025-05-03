import goods from "../../data/goods";
import React, { useState } from "react";

const items = goods.filter(item => item.inCard === true);
let quantityS = [];
items.forEach(element => {
    quantityS = [...quantityS, element.quantity];
});

function CardContent() {

    let totalPriseDefault = 0;
    items.forEach(element => {
        totalPriseDefault = totalPriseDefault + element.prise * element.quantity;
    })

    let [totalPrise, setTotalPrise] = useState(totalPriseDefault);

    const DecreaseTotalPrise = (prise, index) => {
        if (quantityS[index] > 0) {
            quantityS[index] = quantityS[index] - 1;
            let res = totalPrise - prise;
            setTotalPrise(res);
        }
    };

    const IncreaseTotalPrise = (prise, index) => {
        quantityS[index] = quantityS[index] + 1;
        let res = totalPrise + prise;
        setTotalPrise(res);
    };

    return (
        <div className="card-box center">
            <div className="product-box-card">
                {items.map(item => (
                    <div className="product-card" key={item.id}>
                        <img className="product-card__image" src={item.photoLink} alt="product"></img>
                        <div className="product-card__content">
                            <a href="/product">
                                <div className="product-card__name">{item.title}</div>
                            </a>
                            <div className="product-card__prise">Prise:
                                <div className="product-card__prise__item">${item.prise.toFixed(2)}</div>
                            </div>
                            <div className="product-card__color">Color:
                                <div className="product-card__color__item">Red</div>
                            </div>

                            <div className="product-card__size">Size:
                                <div className="product-card__size__item">XS</div>
                            </div>

                            <div className="product-card__quantity">Quantity:
                                <button className="product-card__quantity__button" onClick={() => DecreaseTotalPrise(item.prise, items.indexOf(item))}>-</button>
                                <input className="product-card__quantity__item" type="number" value={quantityS[items.indexOf(item)]} id={item.id}></input>
                                <button className="product-card__quantity__button" onClick={() => IncreaseTotalPrise(item.prise, items.indexOf(item))}>+</button>
                            </div>

                        </div>
                        <a href="/card">
                            <svg className="product-card__close-icon" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                    fill="#575757" />
                            </svg>
                        </a>
                    </div>
                ))}

                <div className="buttons">
                    <a className="clear-btn" href="/">Clear shopping cart</a>
                    <a className="continue-btn" href="/catalog">Continue shopping</a>
                </div>
            </div>

            <div className="order-box">
                <form className="order__adress">
                    <h3 className="order__adress__title">SHIPPING ADRESS</h3>
                    <input type="text" className="order__adress__input" value="City"></input>
                    <input type="text" className="order__adress__input" value="State"></input>
                    <input type="text" className="order__adress__input" value="Postcode&nbsp;/ Zip"></input>
                    <button className="order__adress__button">GET A QUOTE</button>
                </form>

                <div className="proceed">
                    <div className="proseed__text">
                        <div className="subtotal">SUB TOTAL <span className="subtotal__item">${totalPrise.toFixed(2)}</span>
                        </div>
                        <div className="grandtotal">GRAND TOTAL <span className="grandtotal__item">${totalPrise.toFixed(2)}</span>
                        </div>
                    </div>

                    <a className="proseed__button" href="/card">PROCEED TO CHECKOUT</a>

                </div>

            </div>
        </div>
    );
}

export default CardContent;
