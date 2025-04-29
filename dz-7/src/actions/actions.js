
import { createAsyncThunk } from '@reduxjs/toolkit';
export const LOAD_TASKS = 'LOAD_TASKS';

export const loadTasks = () =>  ({
    type: LOAD_TASKS     
});

export const loadTasksTimeout = createAsyncThunk(
    'LOAD_TASKS',
    async () => {
        setTimeout(() => {
            console.log('Иммитация загрузки');            
        }, 1000);
    }
);