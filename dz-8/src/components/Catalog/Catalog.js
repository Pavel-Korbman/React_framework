import Header from "../Header";
import Footer from "../Footer";
import Subscribe from "../Subscribe";
import PromoBlock from "../PromoBlock";
import TopHead from "../TopHead";
import SelectionPanel from "./SelectionPanel";
import GoodsNew from "./GoodsNew";

const Catalog = () => (
    <div className="pages">
        <Header />
        <TopHead />
        <SelectionPanel />
        <GoodsNew />       
        <PromoBlock />
        <Subscribe />
        <Footer />
    </div>
)
export default Catalog;
