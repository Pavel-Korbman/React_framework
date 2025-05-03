import Header from "../Header";
import Footer from "../Footer";
import Subscribe from "../Subscribe";
import TitleBlock from "./TitleBlock";
import PromoBlock from "../PromoBlock";
import Goods from "./GoodsTop";



const HomePage = () => (
    <div>
        <Header />
        <TitleBlock />
        <Goods />
        <PromoBlock />
        <Subscribe />
        <Footer />
    </div>
)
export default HomePage;
