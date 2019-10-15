import React from 'react';
import { Button, Accordion, Card } from 'react-bootstrap';
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reset_difficulty } from '../redux/actions/difficultyActions';
import { reset_trivia } from '../redux/actions/triviaActions';

const Results = () => {

    const num_questions = useSelector(state => state.difficulty.num_questions);
    const questions = useSelector(state => state.trivia.questions);
    const comparisons = useSelector(state => state.trivia.comparisons);

    const dispatch = useDispatch();
    return (
        <div className="result-container">
            <h4 className="result-header">You scored: </h4>
            <p>{ comparisons.filter(v => v).length }/{ num_questions }</p>
            <Accordion className="result-accordion">
            {
                questions.map((question, index) => {
                    return (
                        <Card className="card-container" key={'card-'+ index}>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} eventKey={index}>
                                    { comparisons[index] ? <FaPlus /> : <FaMinus /> }
                                     Question {index +1}
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={index}>
                                <Card.Body>
                                    <p>Category: {question.category}</p>
                                    {question.question}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                })
            }
            </Accordion>
            <Link to='/'>
                <Button className="replay-btn" onClick={() => {
                    dispatch(reset_difficulty())
                    dispatch(reset_trivia())
                }}>Play Again?</Button>
            </Link>
        </div>
    )
};

export default Results;