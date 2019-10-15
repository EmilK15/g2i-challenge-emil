import React from 'react';
import Button from 'react-bootstrap/Button';
import { set_new_answer, set_new_comparsion, next_question } from '../redux/actions/triviaActions';
import { useSelector, useDispatch } from 'react-redux';

const Question = () => {

    const current_question = useSelector(state => state.trivia.current_question);

    const this_question = useSelector(state => state.trivia.questions[current_question -1]);
    const dispatch = useDispatch();

    return (
        <div className="question-container">
            <h2 className="question-header">{this_question.category}</h2>
            <div className="question-content-container">
                <p className="question-text">{this_question.question}</p>
            </div>
            <div className="btn-container">
                <Button className="true-btn" onClick={(e) => { 
                    dispatch(set_new_answer('True'))
                    dispatch(next_question())
                    dispatch(set_new_comparsion('True' === this_question.correct_answer))
                    } }>True</Button>
                <Button className="false-btn" onClick={(e) => { 
                    dispatch(set_new_answer('False'))
                    dispatch(next_question())
                    dispatch(set_new_comparsion('False' === this_question.correct_answer))
                    } }>False</Button>
            </div>
        </div>
    )
};

export default Question;