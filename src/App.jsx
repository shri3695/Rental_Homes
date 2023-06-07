import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Carousel from "./components/Carousel/Carousel";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Carousel />
      <Value />
      <Contact />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
