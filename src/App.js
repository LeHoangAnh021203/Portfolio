import NavBar from "./components/NavBar";
import "./App.css";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects"
import Footer from "./components/Footer";
import Contact from "./components/Contact"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return <div className="App">
    <NavBar />
    <Banner/>
    <Skills/>
    <Projects/>
    <Footer/>
  </div>;
}

export default App;
