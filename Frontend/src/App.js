import "./App.css";
import Cart from "./components/Cart/Cart";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import LoginSignUpModal from "./components/Modal/LoginSignUpModal";
import Test from "./components/test";
// import { Router, Route } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";

// import Navbar from './components/Navbar/Navbar';
// import { Container } from 'semantic-ui-react';
// import Login from './components/login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/test"
          element={<Test title="this is only test screen" />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/login"
          element={<LoginSignUpModal title="login" btnType="Login" />}
        />
        <Route
          path="/signUp"
          element={<LoginSignUpModal title="Sign Up" btnType="Sign Up" />}
        />
      </Routes>
      {/* <br />
			 
			<LoginSignUpModal title="login" btnType="Login" />
			<LoginSignUpModal title="Sign Up" btnType="Sign Up" /> */}
    </div>
  );
}

export default App;
