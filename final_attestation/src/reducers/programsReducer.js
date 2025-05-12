import programs from "../data/programs";
const initialState = [];

const programsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START':
            const program = programs.filter(item => item.id === action.payload);            
            return program[0].lessons;
        default:
            return state;
    }
};

export default programsReducer;
