import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './components/app.js';
import LoginUser from './login_SignUp/loginUser.js';
import LoginAdmin from './login_SignUp/loginAdmin.js';
import SignUp from './login_SignUp/signUpUser.js';
import {
	BrowserRouter,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
};

ReactDOM.render(<AlertProvider template={AlertTemplate} {...options}>
			<BrowserRouter>
			  <Switch>
			    <Route exact path="/" component={LoginUser} />
					<Route exact path="/admin" component={LoginAdmin} />
			    <Route exact path="/home" component={App} />
			  </Switch>
			</BrowserRouter>
	</AlertProvider>, document.getElementById('app'));
