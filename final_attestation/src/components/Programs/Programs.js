import Header from "../Header";
import * as React from 'react';
import programs from "../../data/programs";
import ProgramCart from "../ProgramCart";
import Typography from '@mui/material/Typography';


function Programs() {
    return (
        <div>
            <Header />
            <div className="pages center">
                <Typography className='pages__title' variant="h4" gutterBottom>
                    Программы обучения
                </Typography>
                <div className='box'>
                    {programs.map(item => (
                        <ProgramCart id={item.id} key={item.id} img={item.photoLink} title={item.title} text={item.description} />
                    ))}
                </div>


            </div>

        </div>
    );
}

export default Programs;
