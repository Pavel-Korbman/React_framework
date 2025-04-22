import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="pages">
        <Link to={'/about'}>О нас</Link>
        <h2>Главная страница</h2>
        
    </div>
)
export default HomePage;