
import { LOAD_TASKS } from '../actions/actions'
import tasks from '../data/tasks'

const reducer1 = (state = [], action) => {
    switch (action.type) {
        case LOAD_TASKS:            
            return tasks;
        default:
            return state;
    }
};

export default reducer1;
