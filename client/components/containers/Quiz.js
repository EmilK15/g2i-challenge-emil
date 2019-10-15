import React, { Component } from 'react';
import { fetch_questions } from '../redux/actions/triviaActions';
import { Errormsg, Question, Results, Loading } from '../presentation';
import { connect } from 'react-redux';

class Quiz extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetch_questions(this.props.difficulty);
    }

    render() {
        const { questions, difficulty, questionsLoading, current_question, error } = this.props;
        const errormsg = error ? <Errormsg message={error} /> : null;
        const loading = questionsLoading ? <Loading /> : null;
        const tracker = (current_question <= difficulty.num_questions) ? <p>{current_question} of {difficulty.num_questions}</p> : null;
        const results = (current_question > difficulty.num_questions) ? <Results /> : null;
        return(
            <div className="quiz-container">
                {errormsg}
                {loading}
                {
                    questions.length > 0 && current_question <= difficulty.num_questions ?
                        <Question />
                    :   null
                }
                {tracker}
                {results}
            </div>    
        )
    };
};

const mapStateToProps = state => ({
    difficulty: state.difficulty,
    questionsLoading: state.trivia.questionsLoading,
    questionsError: state.trivia.questionsError,
    questions: state.trivia.questions,
    current_question: state.trivia.current_question
});

const dispatchToProps = dispatch => {
    return {
        fetch_questions: (difficulty) => dispatch(fetch_questions(difficulty)),
    }
};

export default connect(
    mapStateToProps,
    dispatchToProps
)(Quiz);