import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Subscribe from "../Subscribe";
import TopHeadRegistration from "./TopHeadRegistration";
import RegistrationForm from "./RegistrationForm";

const Registration = () => (
    <div className="pages">
        <Header />
        <TopHeadRegistration/>
        <Link to={'/'}>Главная страница</Link>
        <RegistrationForm/>
        <Subscribe/>
        <Footer />
    </div>
)
export default Registration;
