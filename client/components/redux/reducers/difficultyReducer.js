
const initialState = {
    difficulty: '',
    num_questions: ''
};

const difficultyReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_DIFFICULTY':
            return Object.assign({}, state, { difficulty: action.payload });
        case 'SET_NUM_QUESTIONS':
            return Object.assign({}, state, { num_questions: action.payload });
        case 'RESET_DIFFICULTY':
            return Object.assign({}, initialState);
        default:
            return state;
    }
};

export default difficultyReducer;