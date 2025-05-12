import Typography from '@mui/material/Typography';
import Header from "../Header";
import lecturers from "../../data/lecturers";
import LecturerCart from "../LecturerCart";
import Footer from "../Footer";

function Lecturers() {
    return (
        <div>
            <Header />
            <div className="pages center">
                <Typography className='pages__title' variant="h4" gutterBottom>
                    Преподаватели
                </Typography>
                <div className='box'>
                    {lecturers.map(item => (
                        <LecturerCart id={item.id} curs ={item.curs}  key={item.id} img={item.photoLink} name={item.name} text={item.description} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Lecturers;
