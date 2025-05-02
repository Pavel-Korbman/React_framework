
import Header from "../Header";
import Footer from "../Footer";
import Subscribe from "../Subscribe";
import TopHeadCard from "./TopHeadCard";
import CardContent from "./cardContent";


const Card = () => (
    <div className="pages">
        <Header />
        <TopHeadCard />
        <CardContent />
        <Subscribe />
        <Footer />
    </div>
)
export default Card;
