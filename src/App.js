import "./App.css";
import Highlights from "./components/Highlights";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;
