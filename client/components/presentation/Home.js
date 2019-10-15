import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { set_difficulty, set_num_questions } from '../redux/actions/difficultyActions';

const Home = () => {
	const difficulty = useSelector(state => state.difficulty);
	const dispatch = useDispatch();

	return (
		<div className="main-container">
			<h1>Welcome to the trivia Challenge!</h1>
			<h4 className="home-text">Select your difficulty</h4>
			<div className="btn-container">
				<Button variant="success" className="difficulty-btn" onClick={() => dispatch(set_difficulty('easy')) }>Easy</Button>
				<Button variant="warning" className="difficulty-btn" onClick={() => dispatch(set_difficulty('medium')) }>Medium</Button>
				<Button variant="danger" className="difficulty-btn" onClick={() => dispatch(set_difficulty('hard')) }>Hard</Button>
			</div>
			<h4 className="home-text">Select the number of True or False questions you want to answer.</h4>
			<div className="questions-container">
				<Button variant="success" className="difficulty-btn" onClick={(e) => dispatch(set_num_questions(10)) }>10 Questions</Button>
				<Button variant="warning" className="difficulty-btn" onClick={(e) => dispatch(set_num_questions(20)) }>20 Questions</Button>
				<Button variant="danger" className="difficulty-btn" onClick={(e) => dispatch(set_num_questions(30)) }>30 Questions</Button>
			</div>
			<h4 className="home-text">Try to score 100%!</h4>
			{
				difficulty.difficulty ?
					<h4 className="home-text">You selected: { difficulty.difficulty } Difficulty</h4>
				:	null
			}
			{
				difficulty.num_questions ?
					<h4 className="home-text">You selected: { difficulty.num_questions } Questions</h4>
				:	null
			}
			<Link to='/quiz'>
				<Button className="begin-btn" disabled={!difficulty.difficulty || !difficulty.num_questions}>Begin</Button>
			</Link>
		</div>
	)
};

export default Home;