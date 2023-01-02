import "./App.css";
import CardComponent from "./components/category-carousel-pages/Card";
import FooterComponent from "./components/footer-page/footercomponent";
import Login from "./components/login-page/login";
import MenuBar from "./components/menu-bar/menu-list";

function App() {
  return (
    <div className="App">
      <Login title="Login" />
      <Login title="Signup" />
      <MenuBar />
      <CardComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
