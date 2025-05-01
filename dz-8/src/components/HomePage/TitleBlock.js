

function TitleBlock() {
    return (
        <div>
            <div className="title__block center on">
                <img src={require('../../img/man.png')} alt="foto"></img>
            </div>
            <div className="title__block center off">
                <img className="title__foto mobyle__off" src={require('../../img/man_mini.png')} alt="foto"></img>
                    <img className="mobyle__on" src={require('../../img/man_micro.png')} alt="foto"></img>
                    </div>
                    <div className="title__block mobyle__on">
                        <img className="foto" src={require('../../img/man_micro.png')} alt="foto"></img>
                    </div>

                    <nav className="type__block on">
                        <a href="/catalog">
                            <div className="type__item type__item__bgrd-1">
                                <h1 className="type__item__text">30% OFF</h1>
                                <h2 className="type__item__text-1">FOR WOMEN</h2>
                            </div>
                        </a>
                        <a href="/catalog">
                            <div className="type__item type__item__bgrd-2">
                                <h1 className="type__item__text">HOT DEAL</h1>
                                <h2 className="type__item__text-1">FOR MEN</h2>
                            </div>
                        </a>

                        <a href="/catalog">
                            <div className="type__item type__item__bgrd-3">
                                <h1 className="type__item__text">NEW ARRIVALS</h1>
                                <h2 className="type__item__text-1">FOR KIDS</h2>
                            </div>
                        </a>

                        <a href="/catalog">
                            <div className="type__item type__item__bgrd-4">
                                <h1 className="type__item__text">LUXIROUS &amp;&nbsp;TRENDY</h1>
                                <h2 className="type__item__text-1">ACCESORIES</h2>
                            </div>
                        </a>

                    </nav>
                    <nav className="type__block off mobyle__off">
                        <a href="/catalog">
                            <div className="type__item type__item__bgrd-1">
                                <h1 className="type__item__text">30% OFF</h1>
                                <h2 className="type__item__text-1">FOR WOMEN</h2>
                            </div>
                        </a>
                        <a href="/catalog">
                            <div className="type__item type__item__bgrd-2">
                                <h1 className="type__item__text">HOT DEAL</h1>
                                <h2 className="type__item__text-1">FOR MEN</h2>
                            </div>
                        </a>

                        <a href="/catalog">
                            <div className="type__item type__item__bgrd-3">
                                <h1 className="type__item__text">NEW ARRIVALS</h1>
                                <h2 className="type__item__text-1">FOR KIDS</h2>
                            </div>
                        </a>

                        <a href="/catalog">
                            <div className="type__item type__item__bgrd-4">
                                <h1 className="type__item__text">LUXIROUS &amp;&nbsp;TRENDY</h1>
                                <h2 className="type__item__text-1">ACCESORIES</h2>
                            </div>
                        </a>

                    </nav>
                    <nav className="type__block mobyle__on">
                        <a href="/catalog">
                            <div className="type__item type__item__bgrd-1">
                                <h1 className="type__item__text">30% OFF</h1>
                                <h2 className="type__item__text-1">FOR WOMEN</h2>
                            </div>
                        </a>
                        <a href="/catalog">
                            <div className="type__item type__item__bgrd-2">
                                <h1 className="type__item__text">HOT DEAL</h1>
                                <h2 className="type__item__text-1">FOR MEN</h2>
                            </div>
                        </a>

                        <a href="/catalog">
                            <div className="type__item type__item__bgrd-3">
                                <h1 className="type__item__text">NEW ARRIVALS</h1>
                                <h2 className="type__item__text-1">FOR KIDS</h2>
                            </div>
                        </a>

                        <a href="/catalog">
                            <div className="type__item type__item__bgrd-4">
                                <h1 className="type__item__text">LUXIROUS &amp;&nbsp;TRENDY</h1>
                                <h2 className="type__item__text-1">ACCESORIES</h2>
                            </div>
                        </a>

                    </nav>
            </div>
            );
}

            export default TitleBlock;