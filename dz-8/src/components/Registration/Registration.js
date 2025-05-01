
import Header from "../Header";
import Footer from "../Footer";
import Subscribe from "../Subscribe";
import TopHeadRegistration from "./TopHeadRegistration";
import RegistrationForm from "./RegistrationForm";

const Registration = () => (
    <div className="pages">
        <Header />
        <TopHeadRegistration/>        
        <RegistrationForm/>
        <Subscribe/>
        <Footer />
    </div>
)
export default Registration;
