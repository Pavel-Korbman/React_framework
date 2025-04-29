
import { createAsyncThunk } from '@reduxjs/toolkit';
export const LOAD_TASKS = 'LOAD_TASKS';

export const loadTasks = () =>  ({
    type: LOAD_TASKS     
});

// export const loadTasks = createAsyncThunk(
//     'LOAD_TASKS',
//     async () => {
//         setTimeout(() => {
//             return {type: LOAD_TASKS };
//         }, 2000);
//     }
// );