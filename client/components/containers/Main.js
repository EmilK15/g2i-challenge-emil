import React from 'react';
import { Switch, Route } from 'react-router';
import asyncComponent from "./asyncComponent";

const AsyncQuiz = asyncComponent(() => import('./Quiz'));
const AsyncHome = asyncComponent(() => import('../presentation/Home'));

const Main = () => {
	return (
		<Switch>
			<Route exact path='/' component={AsyncHome} />
			<Route exact path='/quiz' component={AsyncQuiz} />
		</Switch>
	);
};

export default Main;