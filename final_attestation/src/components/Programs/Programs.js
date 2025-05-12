import React, { useState } from "react";
import Header from "../Header";
import programs from "../../data/programs";
import ProgramCart from "../ProgramCart";
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from "react-redux";
import { startProgram } from '../../actions/programsActions';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Lesson from "../Lesson/Lesson";

function Programs() {
    const dispatch = useDispatch();
    const lessons = useSelector(state => state.program);

    let [visibleLesson, setVisibleLesson] = useState(false);
    let [headline, setHeadline] = useState('');
    let [filteredPrograms, setFilteredPrograms] = useState(programs);

    const handleStartProgram = (id, title) => {
        dispatch(startProgram(id));
        setVisibleLesson(true);
        setHeadline(title);
    };

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        if (event.target.value === 10) {
            setFilteredPrograms(programs.filter((item) => item.type === 'programming'));
        } else if (event.target.value === 20) {
            setFilteredPrograms(programs.filter((item) => item.type === 'design'));
        } else { setFilteredPrograms(programs); };

    };


    return (
        <div>
            <Header />

            <div className="pages center" style={{ display: visibleLesson ? 'none' : 'block' }}>

                <Typography className='pages__title' variant="h4" gutterBottom>
                    Программы обучения
                </Typography>

                <div className='box__filter'>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">фильтр</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={value}
                            label="Value"
                            onChange={handleChange}
                        >
                            <MenuItem value=''>
                                <em>Все</em>
                            </MenuItem>
                            <MenuItem value={10}>Программирование</MenuItem>
                            <MenuItem value={20}>Дизайн</MenuItem>
                        </Select>
                    </FormControl>
                </div>


                <div className='box'>
                    {filteredPrograms.map(item => (
                        <div key={item.id} onClick={() => handleStartProgram(item.id, item.title)}>
                            <ProgramCart id={item.id} img={item.photoLink} title={item.title} text={item.description} />
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ display: visibleLesson ? 'block' : 'none' }}>
                <Lesson steps={lessons} headLine={headline} />
            </div>

        </div>
    );
}

export default Programs;
