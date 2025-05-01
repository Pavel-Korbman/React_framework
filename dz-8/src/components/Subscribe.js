
function Subscribe() {
    return (
        <section className="subscribe__block center">
            <div className="subscribe__block__content">
                <img src={require('../img/foto.png')} alt="foto"></img>
                <p className="subscribe__text">&laquo;Vestibulum quis porttitor dui! Quisque viverra
                    nunc&nbsp;mi,<i>a&nbsp;pulvinar purus condimentum</i>&raquo;</p>
            </div>
            <div className="forma">
                <div className="title__forma">
                    <h6 className="title__forma__big">SUBSCRIBE</h6>
                    <h6 className="title__forma__norm">FOR OUR NEWLETTER AND PROMOTION</h6>
                </div>
                <form className="form" action="#">
                    <div>
                        <input className="field" type="email" required placeholder="  Enter Your Email"></input>
                        <button className="form__button" type="submit">Subscribe</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Subscribe;
