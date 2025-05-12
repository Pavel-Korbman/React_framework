import React, { useState } from "react";
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
    // let visibleLesson = false;
    let [visibleLesson, setVisibleLesson] = useState(false);
    let [headline, setHeadline] = useState('');

    const handleStartProgram = (id, title) => {
        dispatch(startProgram(id));
        setVisibleLesson(true);
        setHeadline(title);
    };

    return (
        <div>
            <Header />

            <div className="pages center" style={{display: visibleLesson ? 'none' : 'block'}}>
                <Typography className='pages__title' variant="h4" gutterBottom>
                    Программы обучения
                </Typography>
                <div className='box'>
                    {programs.map(item => (
                        <div key={item.id} onClick={() => handleStartProgram(item.id, item.title)}>
                            <ProgramCart id={item.id} img={item.photoLink} title={item.title} text={item.description} />
                        </div>
                    ))}
                </div>
            </div>
            <div style={{display: visibleLesson ? 'block' : 'none'}}>
                <Lesson steps={lessons} headLine = {headline} />
            </div>

        </div>
    );
}

export default Programs;
