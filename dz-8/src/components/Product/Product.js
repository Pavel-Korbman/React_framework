
import Header from "../Header";
import Footer from "../Footer";
import Subscribe from "../Subscribe";
import TopHead from "../TopHead";
import ProductCart from "./ProductCart";
import Good from "../Good";
import goods from "../../data/goods";

const items = goods.filter(item => item.inProduct===true);

const Product = () => (
    <div className="pages">
        <Header />
        <TopHead />
        <ProductCart />
        <div className="product__box center">
            {items.map(item => (
                <Good id={item.id} img={item.photoLink} name={item.title} text={item.description} prise={item.prise} />
            ))}
        </div>
        <Subscribe />
        <Footer />
    </div>
)
export default Product;
