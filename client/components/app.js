import React from 'react';
import { Main } from './containers/';
import { render } from 'react-dom';
import '../../public/stylesheets/styles.scss';
import { BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import store from './redux';
import { Provider } from 'react-redux';


render(<Provider store={store}>
		<Router>
			<Main />
		</Router>
	</Provider>,
document.getElementById('root'));

serviceWorker.unregister();