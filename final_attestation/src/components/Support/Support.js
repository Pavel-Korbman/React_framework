import Footer from "../Footer";
import Header from "../Header";
import Typography from '@mui/material/Typography';

function Support() {
    return (
        <div>
            <Header />
            <div className="pages center">
                <Typography className='pages__title' variant="h4" gutterBottom>
                    FAQ
                </Typography>
                <div className='box'>                    
                    <Typography className='pages__title' variant="h6" gutterBottom>
                        Блок часто задаваемых вопросов
                    </Typography>
                </div>


            </div>
            <Footer/>

        </div>
    );
}

export default Support;
