export const set_difficulty = (difficulty) => {
    return {
        type: 'SET_DIFFICULTY',
        payload: difficulty
    }
};

export const set_num_questions = (num_questions) => {
    return {
        type: 'SET_NUM_QUESTIONS',
        payload: num_questions
    }
};

export const reset_difficulty = () => {
    return {
        type: 'RESET_DIFFICULTY'
    }
};