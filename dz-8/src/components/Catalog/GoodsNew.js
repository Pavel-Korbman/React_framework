import Good from "../Good";
import goods from "../../data/goods";
import React, { useState } from "react";

function GoodsNew() {
    const [products, setProducts] = useState(goods);


    function handleFilter(value) {
        if (value !== '') {
            const filterBySize = goods.filter(item => item.size === value);
            setProducts(filterBySize);
        } else {setProducts(goods)};
    }

    return (
        <>
            <div className="selection-panel center">


                <details className="selection-panel__filtr-btn">
                    <summary>
                        FILTER
                        <svg className="selection-panel__filtr-btn__icon" width="15" height="10" viewBox="0 0 15 10" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                                fill="black" />
                        </svg>
                    </summary>


                    <nav className="selection-panel__filtr">

                        <div className="selection-panel__filtr__menu">

                            <details className="selection-panel__filtr__menu__punkt">
                                <summary className="selection-panel__filtr__menu__punkt__title">
                                    <svg width="5" height="37" viewBox="0 0 5 37" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 0H0V37H5V0Z" fill="#EF5B70" />
                                    </svg>
                                    CATEGORY
                                </summary>
                                <ul>
                                    <li className="selection-panel__filtr__menu__punkt__item">Accessories</li>
                                    <li className="selection-panel__filtr__menu__punkt__item">Bags</li>
                                    <li className="selection-panel__filtr__menu__punkt__item">Denim</li>
                                    <li className="selection-panel__filtr__menu__punkt__item">Hoodies & Sweatshirts</li>
                                </ul>


                            </details>

                            <details className="selection-panel__filtr__menu__punkt">
                                <summary className="selection-panel__filtr__menu__punkt__title">
                                    <svg width="5" height="37" viewBox="0 0 5 37" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 0H0V37H5V0Z" fill="#EF5B70" />
                                    </svg>

                                    BRAND
                                </summary>
                            </details>

                            <details className="selection-panel__filtr__menu__punkt">
                                <summary className="selection-panel__filtr__menu__punkt__title">
                                    <svg width="5" height="37" viewBox="0 0 5 37" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 0H0V37H5V0Z" fill="#EF5B70" />
                                    </svg>

                                    DESIGNER
                                </summary>
                            </details>
                        </div>
                    </nav>
                </details>



                <div className="selection-panel__selector">

                    <details className="selection-panel__selector__item">
                        <summary className="selection-panel__selector__item__title">TRENDING NOW
                            <svg className="selection-panel__selector__item__icon" width="11" height="5" viewBox="0 0 11 5"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                                    fill="#6F6E6E" />
                            </svg>
                        </summary>
                        <div className="selection-panel__selector__item__menu">
                            <ul>
                                <li><input className="selection-panel__selector__item__menu__punkt" type="checkbox" value={'XS'}></input>TREND 1</li>
                                <li><input className="selection-panel__selector__item__menu__punkt" type="checkbox" value={'S'}></input>TREND 2</li>
                                <li><input className="selection-panel__selector__item__menu__punkt" type="checkbox" value={'M'}></input>TREND 3</li>
                                <li><input className="selection-panel__selector__item__menu__punkt" type="checkbox" value={'L'}></input>TREND 4</li>
                            </ul>
                        </div>
                    </details>

                    <details className="selection-panel__selector__item">
                        <summary className="selection-panel__selector__item__title">SIZE
                            <svg className="selection-panel__selector__item__icon" width="11" height="5" viewBox="0 0 11 5"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                                    fill="#6F6E6E" />
                            </svg>
                        </summary>
                        <div className="selection-panel__selector__item__menu">
                            <ul>
                                <li><input className="selection-panel__selector__item__menu__punkt"
                                    type="radio" name="radio" value={''} readOnly onClick={(e) => handleFilter(e.target.value)}  ></input>All</li>
                                <li><input className="selection-panel__selector__item__menu__punkt"
                                    type="radio" name="radio" value={'XS'} readOnly onClick={(e) => handleFilter(e.target.value)}></input>XS</li>
                                <li><input className="selection-panel__selector__item__menu__punkt" type="radio" name="radio" value={'S'} readOnly onClick={(e) => handleFilter(e.target.value)}></input>S</li>
                                <li><input className="selection-panel__selector__item__menu__punkt" type="radio" name="radio" value={'M'} readOnly onClick={(e) => handleFilter(e.target.value)}></input>M</li>
                                <li><input className="selection-panel__selector__item__menu__punkt" type="radio" name="radio" value={'L'} readOnly onClick={(e) => handleFilter(e.target.value)}></input>L</li>
                            </ul>
                        </div>
                    </details>

                    <details className="selection-panel__selector__item">
                        <summary className="selection-panel__selector__item__title">PRISE
                            <svg className="selection-panel__selector__item__icon" width="11" height="5" viewBox="0 0 11 5"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                                    fill="#6F6E6E" />
                            </svg>
                        </summary>
                        <div className="selection-panel__selector__item__menu">
                            <ul>
                                <li><input className="selection-panel__selector__item__menu__punkt" type="checkbox" value={'XS'}></input>GAP 1</li>
                                <li><input className="selection-panel__selector__item__menu__punkt" type="checkbox" value={'S'}></input>GAP 2</li>
                                <li><input className="selection-panel__selector__item__menu__punkt" type="checkbox" value={'M'}></input>GAP 3</li>
                                <li><input className="selection-panel__selector__item__menu__punkt" type="checkbox" value={'L'}></input>GAP 4</li>
                            </ul>
                        </div>
                    </details>

                </div>
            </div>


            <div className="product__box center">
                {products.map(item => (
                    <Good id={item.id} key={item.id} img={item.photoLink} name={item.title} text={item.description} prise={item.prise} />
                ))}

            </div>

            <div className="catalog__pagination">
                <div className="catalog__pagination__box">
                    <a className="catalog__pagination__arrow" href="/catalog">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.995 2L2.995 7L7.995 12L6.995 14L-0.00500488 7L6.995 0L7.995 2Z" fill="black" />
                        </svg>
                    </a>
                    <div className="catalog__pagination__box__numbers">
                        <a className="catalog__pagination__box__numbers__item__active" href="/catalog">1</a>
                        <a className="catalog__pagination__box__numbers__item" href="/catalog">2</a>
                        <a className="catalog__pagination__box__numbers__item" href="/catalog">3</a>
                        <a className="catalog__pagination__box__numbers__item" href="/catalog">4</a>
                        <a className="catalog__pagination__box__numbers__item" href="/catalog">5</a>
                        <a className="catalog__pagination__box__numbers__item" href="/catalog">6.....20</a>
                    </div>

                    <a className="catalog__pagination__arrow" href="/catalog">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-0.00500488 12L4.995 7L-0.00500488 2L0.994995 0L7.995 7L0.994995 14L-0.00500488 12Z"
                                fill="black" />
                        </svg>

                    </a>
                </div>

            </div>

        </>
    );
}

export default GoodsNew;
