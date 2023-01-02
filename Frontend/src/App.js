import "./App.css";
import Cart from "./components/Cart/Cart";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import LoginSignUpModal from "./components/Modal/LoginSignUpModal";

import { Routes, Route } from "react-router-dom";
// import Hello from './components/Hello';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />

				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/login" element={<LoginSignUpModal title="login" btnType="Login" />} />
				<Route path="/signUp" element={<LoginSignUpModal title="Sign Up" btnType="Sign Up" />} />
			</Routes>
			{/* <br />
			 
			<LoginSignUpModal title="login" btnType="Login" />
			<LoginSignUpModal title="Sign Up" btnType="Sign Up" /> */}
		</div>
	);
}

export default App;
