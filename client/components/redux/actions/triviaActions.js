import axios from "axios";

const base_url = 'https://opentdb.com/api.php';

export const questions_error = (bool) => {
    return {
        type: 'QUESTIONS_ERROR',
        payload: bool
    }
};

export const questions_loading = (bool) => {
    return {
        type: 'QUESTIONS_LOADING',
        payload: bool
    }
};

export const get_questions = (questions) => {
    return {
        type: 'GET_QUESTIONS',
        payload: questions
    }
};

export const fetch_questions = (difficulty) => {
    return function(dispatch) {
        dispatch(questions_loading(true));

        return axios.get(base_url, {
            params: {
                amount: difficulty.num_questions,
                difficulty: difficulty.difficulty,
                type: 'boolean',
                encode: 'base64'
            }
        })
        .then((res) => {
            res.data.results.map((question) => {
                let keys = Object.keys(question);
                let values = Object.values(question);
                for(let i=0; i<values.length; i++) {
                    question[keys[i]] = atob(values[i]);
                }
            });
            dispatch(get_questions(res.data.results));
        })
    }
};

export const set_new_answer = (answer) => {
    return {
        type: 'SET_NEW_ANSWER',
        payload: answer
    }
};

export const set_new_comparsion = (comparison) => {
    return {
        type: 'SET_NEW_COMPARISON',
        payload: comparison
    }
};

export const next_question = () => {
    return {
        type: 'NEXT_QUESTION'
    }
};

export const reset_trivia = () => {
    return {
        type: 'RESET_TRIVIA'
    }
};