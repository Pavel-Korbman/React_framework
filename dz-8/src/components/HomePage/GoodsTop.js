const hover = require('../../img/Hover.png');

function Goods() {
    return (
        <main>
            <section class="title">
                <h1>Fetured Items</h1>
                <h5 class="title__text">Shop for items based on what we featured in this week</h5>
            </section>

            <section class="goods">
                <div class="item">
                    <a href="#">
                        <div class="item__foto">
                            <img class="item__foto" src={require('../../img/product_1.jpg')} alt="card"></img>
                            <img class="hoover__on" src={hover} alt="card"></img>
                            
                        </div>
                        <h3>ELLERY X&nbsp;M&rsquo;O CAPSULE</h3>
                        <p>Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams up&nbsp;with Moda Operandi.</p>
                        <h4>$52.00</h4>
                    </a>

                </div>
                <div class="item">
                    <a href="#">
                        <div class="item__foto">
                            <img class="item__foto" src={require('../../img/product_2.jpg')} alt="card"></img>
                            <img class="hoover__on" src={hover} alt="card"></img>
                        </div>
                        <h3>ELLERY X&nbsp;M&rsquo;O CAPSULE</h3>
                        <p>Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter of&nbsp;cool Kym
                            Ellery teams up&nbsp;with Moda Operandi.</p>
                        <h4>$52.00</h4>
                    </a>

                </div>
                <div class="item">
                    <a href="#">
                        <div class="item__foto">
                            <img class="item__foto" src={require('../../img/product_3.jpg')} alt="card"></img>
                            <img class="hoover__on" src={hover} alt="card"></img>
                        </div>
                        <h3>ELLERY X&nbsp;M&rsquo;O CAPSULE</h3>
                        <p>Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter of&nbsp;cool Kym
                            Ellery teams up&nbsp;with Moda Operandi.</p>
                        <h4>$52.00</h4>
                    </a>

                </div>
                <div class="item">
                    <a href="#">
                        <div class="item__foto">
                            <img class="item__foto" src={require('../../img/product_4.jpg')} alt="card"></img>
                            <img class="hoover__on" src={hover} alt="card"></img>
                        </div>
                        <h3>ELLERY X&nbsp;M&rsquo;O CAPSULE</h3>
                        <p>Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter of&nbsp;cool Kym
                            Ellery teams up&nbsp;with Moda Operandi.</p>
                        <h4>$52.00</h4>
                    </a>

                </div>
                <div class="item">
                    <a href="#">
                        <div class="item__foto">
                            <img class="item__foto" src={require('../../img/product_5.jpg')} alt="card"></img>
                            <img class="hoover__on" src={hover} alt="card"></img>
                        </div>
                        <h3>ELLERY X&nbsp;M&rsquo;O CAPSULE</h3>
                        <p>Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter of&nbsp;cool Kym
                            Ellery teams up&nbsp;with Moda Operandi.</p>
                        <h4>$52.00</h4>
                    </a>

                </div>
                <div class="item">
                    <a href="#">
                        <div class="item__foto">
                            <img class="item__foto" src={require('../../img/product_6.jpg')} alt="card"></img>
                            <img class="hoover__on" src={hover} alt="card"></img>
                        </div>
                        <h3>ELLERY X&nbsp;M&rsquo;O CAPSULE</h3>
                        <p>Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter of&nbsp;cool Kym
                            Ellery teams up&nbsp;with Moda Operandi.</p>
                        <h4>$52.00</h4>
                    </a>

                </div>
            </section>

            <div class="button__block">
                <a class="button" href="/catalog">Browse All Product</a>
            </div>
        </main>
    );
}

export default Goods;