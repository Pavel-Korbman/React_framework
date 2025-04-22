import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';


function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [count, setCount] = useState(0);

    const updateCount = () => { setCount(count + 1) };

    const addTask = () => {
        tasks.push(task);
        setTasks(tasks);
        setTask({ text: '' });
        updateCount();        
    };

    function TodoBox() {  
    
        const delTask = (id) => {
            setTasks(tasks => tasks.filter(element => element.id !== id));
        }
    
        return tasks.map((task) =>
            <Card sx={{ minWidth: 275 }} key={task.id}>
                <CardContent>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Дело {tasks.indexOf(task)+1}</Typography>
                    <Typography variant="body2">
                    {task.text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => delTask(task.id)}><DeleteIcon /></Button>
                </CardActions>
            </Card>
    
        );
    }

    return (
        <div>
            <div className='task-input'>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '45ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            label="Добавьте новое дело"
                            onInput={(e) => setTask({ id: count, text: e.target.value })}
                            multiline
                            maxRows={8}
                            value={task.text}
                        />
                    </div>
                </Box>

                <div>
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" onClick={addTask} >Добавить</Button>
                    </Stack>
                </div>

            </div>
            <div className='todo'>
                <TodoBox />
            </div>

        </div>

    );

};



export default TodoList;