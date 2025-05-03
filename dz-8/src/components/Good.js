const hover = require('../img/Hover.png');

function Good(props) {

    return (
        <div className="product" key={props.id}>
            <img className="product__image" src={props.img} alt="product"></img>
            <img className="hoover__on" src={hover} alt="card"></img>
            <div className="product__content">
                <a href="#" className="product__name">{props.name}</a>
                <p className="product__text">{props.text}</p>
                <p className="product__prise">${props.prise.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Good;
