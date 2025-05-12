import Header from "../Header";
import Typography from '@mui/material/Typography';
import * as React from 'react';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function HomePage() {
    return (
        <div>
            <Header />
            <div className="pages center">
                <Typography className='pages__title' variant="h4" gutterBottom>
                    Добро пожаловать!
                </Typography>
                <Typography className='pages__title' variant="h6" gutterBottom>
                    ИТ-специалисты востребованы в финансах, ритейле, образовании и многих других отраслях. Экономика и повседневная жизнь все больше переходит в «цифру», поэтому у ИТ-сферы самые большие перспективы на развитие в ближайшем будущем.
                </Typography>
                <div className="centerbox">
                    <Button href="/programs" variant="outlined">Посмотреть программы обучения</Button>
                </div>

            </div>

        </div>

    );
}

export default HomePage;
