import Good from "../Good";
import goods from "../../data/goods";

function GoodsNew() {

    return (


        <>
            <div className="product__box center">
                {goods.map(item => (                  
                    <Good id={item.id} img={item.photoLink} name={item.title} text={item.description} prise={item.prise} />
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
