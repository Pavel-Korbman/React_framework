import Footer from "../Footer";
import Header from "../Header";
import Typography from '@mui/material/Typography';

function Info() {
    return (
        <div>
            <Header />
            <div className="pages center">
                <Typography className='pages__title' variant="h4" gutterBottom>
                    Информация
                </Typography>
                <div className='box'>                    
                    <Typography className='pages__title' variant="h6" gutterBottom>
                        Блок правовой информации
                    </Typography>
                </div>

            </div>
            <Footer/>

        </div>
    );
}

export default Info;
