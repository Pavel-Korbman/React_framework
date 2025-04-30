import { Link } from "react-router-dom";
import Header from "../Header";

const HomePage = () => (
    <div>
        <Header/>
        
        <Link to={"/catalog"}>Каталог</Link>
        <Link to={"/card"}>Корзина</Link>
        <Link to={"/product"}>Продукт</Link>
        <Link to={"/registration"}>Регистрация</Link>
        <h2>Главная страница</h2>
        
    </div>
)
export default HomePage;
