import './App.css';
import Cart from './components/Cart/Cart';
import LoginSignUpModal from './components/Modal/LoginSignUpModal';
// import { Router, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import { Container } from 'semantic-ui-react';
// import Login from './components/login';
function App() {
	return (
		<div className="App">
			<br />
			<br />
			<br />
			<Cart />
			<br />
			<br />
			<br />
			<LoginSignUpModal title="login" btnType="Login" />
			<LoginSignUpModal title="Sign Up" btnType="Sign Up" />
		</div>
	);
}

export default App;
