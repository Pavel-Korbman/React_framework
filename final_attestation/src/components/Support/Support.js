import Header from "../Header";
import Typography from '@mui/material/Typography';

function Support() {
    return ( 
        <div>
            <Header />
            <div className="pages center">
                <Typography className='pages__title' variant="h4" gutterBottom>
                    Поддержка
                </Typography>
                <div className='box'>
                <video src="video.mp4" poster="poster.jpg" controls></video>
                </div>


            </div>

        </div>
     );
}

export default Support;
