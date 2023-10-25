import "./App.css";
import Highlights from "./components/Highlights";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Nav />
      <Highlights />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
