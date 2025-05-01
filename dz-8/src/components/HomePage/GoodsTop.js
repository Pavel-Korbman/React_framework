import Good from "../Good";
import goods from "../../data/goods";

const items = goods.filter(item => item.inTop === true);

function Goods() {
    return (
        <main>
            <section className="title">
                <h1>Fetured Items</h1>
                <h5 className="title__text">Shop for items based on what we featured in this week</h5>
            </section>

            <section className="goods">
                {items.map(item => (
                    <Good id={item.id} img={item.photoLink} name={item.title} text={item.description} prise={item.prise} />
                ))}
            </section>

            <div className="button__block">
                <a className="button" href="/catalog">Browse All Product</a>
            </div>
        </main>
    );
}

export default Goods;