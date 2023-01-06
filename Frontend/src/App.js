import "./App.css";
import Cart from "./components/Cart/Cart";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import LoginSignUpModal from "./components/Modal/LoginSignUpModal";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Common/Footer";
import ItemDescription from "./components/Items/ItemDescription";
import CategoryItems from "./components/Items/CategoryItems";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Care from "./components/Care-plan/Care";
import LabTest from "./components/Lab-test/lab-test";
import Editprofile from "./components/Dashboard/EditProfile";
// import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDesc/:id" element={<ItemDescription />} />
        <Route path="/categoryItem/:id" element={<CategoryItems />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/care" element={<Care />} />
        <Route path="/lab" element={<LabTest />} />
        <Route path="/editprofile" element={<Editprofile />} />
        <Route
          path="/login"
          element={<LoginSignUpModal title="login" btnType="Login" />}
        />
        <Route
          path="/signUp"
          element={<LoginSignUpModal title="Sign Up" btnType="Sign Up" />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
