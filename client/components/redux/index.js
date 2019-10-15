import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { difficultyReducer, triviaReducer } from './reducers';

const root = combineReducers({
    difficulty: difficultyReducer,
    trivia: triviaReducer
});

const store = createStore(
    root,
    compose(
        applyMiddleware(thunk), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;