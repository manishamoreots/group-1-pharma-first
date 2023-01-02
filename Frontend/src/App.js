import "./App.css";
import CardComponent from "./components/category-carousel-pages/Card";

import SearchLocation from "./components/location/searchlocation";

import MainSlider from "./components/main-slider/main-slider";
// import MenuBar from "./components/menu-bar/menu-list";

function App() {
  return (
    <div className="App">
      <SearchLocation />
      {/* <MenuBar /> */}
      <CardComponent />
      <MainSlider />
    </div>
  );
}

export default App;
