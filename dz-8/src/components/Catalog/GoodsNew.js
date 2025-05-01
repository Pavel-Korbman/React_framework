const hover = require('../../img/Hover.png');
function GoodsNew() {
    return (
        <>
            <div class="product__box center">
                <div class="product">
                    <img class="product__image" src={require('../../img/product_1.jpg')} alt="product"></img>
                    <img class="hoover__on" src={hover} alt="card"></img>
                    <div class="product__content">
                        <a href="#" class="product__name">ELLERY X&nbsp;M&rsquo;O CAPSULE</a>
                        <p class="product__text">Known for her sculptural takes on&nbsp;traditional tailoring, Australian
                            arbiter of&nbsp;cool Kym Ellery teams up&nbsp;with Moda Operandi.</p>
                        <p class="product__prise">$52.00</p>
                    </div>
                </div>

                <div class="product">
                    <img class="product__image" src={require('../../img/product_2.jpg')} alt="product"></img>
                    <img class="hoover__on" src={hover} alt="card"></img>
                    <div class="product__content">
                        <a href="#" class="product__name">ELLERY X&nbsp;M&rsquo;O CAPSULE</a>
                        <p class="product__text">Known for her sculptural takes on&nbsp;traditional tailoring, Australian
                            arbiter of&nbsp;cool Kym Ellery teams up&nbsp;with Moda Operandi.</p>
                        <p class="product__prise">$52.00</p>
                    </div>
                </div>

                <div class="product">
                    <img class="product__image" src={require('../../img/product_3.jpg')} alt="product"></img>
                    <img class="hoover__on" src={hover} alt="card"></img>
                    <div class="product__content">
                        <a href="#" class="product__name">ELLERY X&nbsp;M&rsquo;O CAPSULE</a>
                        <p class="product__text">Known for her sculptural takes on&nbsp;traditional tailoring, Australian
                            arbiter of&nbsp;cool Kym Ellery teams up&nbsp;with Moda Operandi.</p>
                        <p class="product__prise">$52.00</p>
                    </div>
                </div>

            </div>
            
            <div class="catalog__pagination">
                    <div class="catalog__pagination__box">
                        <a class="catalog__pagination__arrow" href="#">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.995 2L2.995 7L7.995 12L6.995 14L-0.00500488 7L6.995 0L7.995 2Z" fill="black" />
                            </svg>
                        </a>
                        <div class="catalog__pagination__box__numbers">
                            <a class="catalog__pagination__box__numbers__item__active" href="#">1</a>
                            <a class="catalog__pagination__box__numbers__item" href="#">2</a>
                            <a class="catalog__pagination__box__numbers__item" href="#">3</a>
                            <a class="catalog__pagination__box__numbers__item" href="#">4</a>
                            <a class="catalog__pagination__box__numbers__item" href="#">5</a>
                            <a class="catalog__pagination__box__numbers__item" href="#">6.....20</a>
                        </div>

                        <a class="catalog__pagination__arrow" href="#">
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
