

function TitleBlock() {
    return (
        <div>
            <div class="title__block center on">
                <img src={require('../../img/man.png')} alt="foto"></img>
            </div>
            <div class="title__block center off">
                <img class="title__foto mobyle__off" src={require('../../img/man_mini.png')} alt="foto"></img>
                    <img class="mobyle__on" src={require('../../img/man_micro.png')} alt="foto"></img>
                    </div>
                    <div class="title__block mobyle__on">
                        <img class="foto" src={require('../../img/man_micro.png')} alt="foto"></img>
                    </div>

                    <nav class="type__block on">
                        <a href="/">
                            <div class="type__item type__item__bgrd-1">
                                <h1 class="type__item__text">30% OFF</h1>
                                <h2 class="type__item__text-1">FOR WOMEN</h2>
                            </div>
                        </a>
                        <a href="/">
                            <div class="type__item type__item__bgrd-2">
                                <h1 class="type__item__text">HOT DEAL</h1>
                                <h2 class="type__item__text-1">FOR MEN</h2>
                            </div>
                        </a>

                        <a href="/">
                            <div class="type__item type__item__bgrd-3">
                                <h1 class="type__item__text">NEW ARRIVALS</h1>
                                <h2 class="type__item__text-1">FOR KIDS</h2>
                            </div>
                        </a>

                        <a href="/">
                            <div class="type__item type__item__bgrd-4">
                                <h1 class="type__item__text">LUXIROUS &amp;&nbsp;TRENDY</h1>
                                <h2 class="type__item__text-1">ACCESORIES</h2>
                            </div>
                        </a>

                    </nav>
                    <nav class="type__block off mobyle__off">
                        <a href="/">
                            <div class="type__item type__item__bgrd-1">
                                <h1 class="type__item__text">30% OFF</h1>
                                <h2 class="type__item__text-1">FOR WOMEN</h2>
                            </div>
                        </a>
                        <a href="/">
                            <div class="type__item type__item__bgrd-2">
                                <h1 class="type__item__text">HOT DEAL</h1>
                                <h2 class="type__item__text-1">FOR MEN</h2>
                            </div>
                        </a>

                        <a href="/">
                            <div class="type__item type__item__bgrd-3">
                                <h1 class="type__item__text">NEW ARRIVALS</h1>
                                <h2 class="type__item__text-1">FOR KIDS</h2>
                            </div>
                        </a>

                        <a href="/">
                            <div class="type__item type__item__bgrd-4">
                                <h1 class="type__item__text">LUXIROUS &amp;&nbsp;TRENDY</h1>
                                <h2 class="type__item__text-1">ACCESORIES</h2>
                            </div>
                        </a>

                    </nav>
                    <nav class="type__block mobyle__on">
                        <a href="/">
                            <div class="type__item type__item__bgrd-1">
                                <h1 class="type__item__text">30% OFF</h1>
                                <h2 class="type__item__text-1">FOR WOMEN</h2>
                            </div>
                        </a>
                        <a href="/">
                            <div class="type__item type__item__bgrd-2">
                                <h1 class="type__item__text">HOT DEAL</h1>
                                <h2 class="type__item__text-1">FOR MEN</h2>
                            </div>
                        </a>

                        <a href="/">
                            <div class="type__item type__item__bgrd-3">
                                <h1 class="type__item__text">NEW ARRIVALS</h1>
                                <h2 class="type__item__text-1">FOR KIDS</h2>
                            </div>
                        </a>

                        <a href="/">
                            <div class="type__item type__item__bgrd-4">
                                <h1 class="type__item__text">LUXIROUS &amp;&nbsp;TRENDY</h1>
                                <h2 class="type__item__text-1">ACCESORIES</h2>
                            </div>
                        </a>

                    </nav>
            </div>
            );
}

            export default TitleBlock;