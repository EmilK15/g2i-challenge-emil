
const initialState = {
    questions: [],
    current_question: 1,
    answers: [],
    comparisons: [],
    questionsLoading: false,
    questionsError: false
};

const triviaReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_QUESTIONS':
            return Object.assign({}, state, { questions: action.payload, questionsLoading: false });
        case 'QUESTIONS_LOADING':
            return Object.assign({}, state, { questionsLoading: action.payload });
        case 'QUESTIONS_ERROR':
            return Object.assign({}, state, { questionsError: action.payload });
        case 'SET_NEW_ANSWER':
            return Object.assign({}, state, { answers: [...state.answers, action.payload] });
        case 'SET_NEW_COMPARISON':
            return Object.assign({}, state, { comparisons: [...state.comparisons, action.payload] });
        case 'NEXT_QUESTION':
            return Object.assign({}, state, { current_question: state.current_question +1 });
        case 'RESET_TRIVIA':
            return Object.assign({}, initialState);
        default:
            return state;
    }
};

export default triviaReducer;