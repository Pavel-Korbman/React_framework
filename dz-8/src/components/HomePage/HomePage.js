import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Subscribe from "../Subscribe";
import TitleBlock from "./TitleBlock";
import PromoBlock from "../PromoBlock";
import Goods from "./GoodsTop";


const HomePage = () => (
    <div>
        <Header />
        <Link to={"/catalog"}>Каталог</Link>
        <Link to={"/card"}>Корзина</Link>
        <Link to={"/product"}>Продукт</Link>
        <Link to={"/registration"}>Регистрация</Link>
        <TitleBlock />
        <Goods />
        <PromoBlock />
        <Subscribe />
        <Footer />
    </div>
)
export default HomePage;
