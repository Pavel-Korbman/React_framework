import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Subscribe from "../Subscribe";
import TopHeadCard from "./TopHeadCard";

const Card = () => (
    <div className="pages">
        <Header />
        <TopHeadCard />
        <Link to={'/'}>Главная страница</Link>

        <Subscribe />
        <Footer />
    </div>
)
export default Card;
