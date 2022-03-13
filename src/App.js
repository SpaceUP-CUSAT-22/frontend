import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/home";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Speakers from "./Components/Speakers/speakers";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Speakers />
      <Footer />
    </>
  );
}

export default App;
