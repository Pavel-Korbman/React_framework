import Footer from "../Footer";
import Header from "../Header";
import Typography from '@mui/material/Typography';

function Info() {
    return (
        <div>
            <Header />
            <div className="pages center box__faq">
                <Typography className='pages__title' variant="h4" gutterBottom>
                    Информация
                </Typography>
                <div className='box'>                    
                    <Typography className='pages__title' variant="h7" gutterBottom>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </div>

            </div>
            <Footer/>

        </div>
    );
}

export default Info;
