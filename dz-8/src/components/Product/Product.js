import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Subscribe from "../Subscribe";
import TopHead from "../TopHead";

const Product = () => (
    <div className="pages">
        <Header />
        <Link to={'/'}>Главная страница</Link>
        <TopHead />
        
        <Subscribe />
        <Footer />
    </div>
)
export default Product;
