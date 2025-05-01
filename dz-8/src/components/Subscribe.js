
function Subscribe() {
    return (
        <section class="subscribe__block center">
            <div class="subscribe__block__content">
                <img src={require('../img/foto.png')} alt="foto"></img>
                <p class="subscribe__text">&laquo;Vestibulum quis porttitor dui! Quisque viverra
                    nunc&nbsp;mi,<i>a&nbsp;pulvinar purus condimentum</i>&raquo;</p>
            </div>
            <div class="forma">
                <div class="title__forma">
                    <h6 class="title__forma__big">SUBSCRIBE</h6>
                    <h6 class="title__forma__norm">FOR OUR NEWLETTER AND PROMOTION</h6>
                </div>
                <form class="form" action="#">
                    <div>
                        <input class="field" type="email" required placeholder="  Enter Your Email"></input>
                        <button class="form__button" type="submit">Subscribe</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Subscribe;
