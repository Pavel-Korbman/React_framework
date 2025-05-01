import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Subscribe from "../Subscribe";
import PromoBlock from "../PromoBlock";
import TopHead from "../TopHead";


const Catalog = () => (
    <div className="pages">
        <Header /> 
        <TopHead/>
        <Link to={'/'}>Главная страница</Link>
       

        <PromoBlock />
        <Subscribe />
        <Footer />
    </div>
)
export default Catalog;
