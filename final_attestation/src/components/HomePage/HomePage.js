import Header from "../Header";
import Typography from '@mui/material/Typography';
import Footer from "../Footer";
import ProgramCart from "../ProgramCart";


function HomePage() {

    return (
        <div>
            <Header />
            <div className="pages center">
                <Typography className='pages__title' variant="h4" gutterBottom>
                    Познакомьтесь с основами программирования!
                </Typography>
                <Typography className='pages__title' variant="h6" gutterBottom>
                    <div>ИТ-специалисты востребованы в финансах, ритейле, образовании и многих других отраслях.</div>
                    <div>Экономика и повседневная жизнь все больше переходит в «цифру»,</div> поэтому у ИТ-сферы самые большие перспективы на развитие в ближайшем будущем.
                </Typography>

                <div className='box'>                   
                        <a href="/programs" >
                            <ProgramCart id={'title-banner'} img={require('../../img/title_banner.jpg')} title={'Выберите программу обучения'} text={'Перейдите в раздел "Программы обучения". Выберите  интересующее вас направление, при помощи фильтра и начните обучение.'} />
                        </a>
                        <a href="/lecturers" >
                            <ProgramCart id={'title-banner'} img={require('../../img/title_banner_2.jpg')} title={'Познакомьтесь с преподавателями'} text={'Перейдите в раздел "Преподаватели". Прочитайте подробную информацию о наших преподавателях.'} />
                        </a>                  
                </div>

            </div>
            <Footer />

        </div>

    );
}

export default HomePage;
