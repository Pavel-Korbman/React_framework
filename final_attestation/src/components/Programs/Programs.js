import Header from "../Header";
import programs from "../../data/programs";
import ProgramCart from "../ProgramCart";
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from "react-redux";
import { startProgram } from '../../actions/programsActions';
import Lesson from "../Lesson/Lesson";

function Programs() {
    const dispatch = useDispatch();
    const lessons = useSelector(state => state.program);
    
    const handleStartProgram = (id) => {
        dispatch(startProgram(id));
    };

    return (
        <div>
            <Header />

            <div className="pages center">
                <Typography className='pages__title' variant="h4" gutterBottom>
                    Программы обучения
                </Typography>
                <div className='box'>
                    {programs.map(item => (
                        <div key={item.id} onClick={() => handleStartProgram(item.id)}>
                            <ProgramCart id={item.id} img={item.photoLink} title={item.title} text={item.description} />
                        </div>
                    ))}
                </div>
            </div>

            <Lesson steps = {lessons}/>

        </div>
    );
}

export default Programs;
