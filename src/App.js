import "./App.css";
import Highlights from "./components/Highlights";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookingPage from "./components/BookingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Hero />
            <Highlights />
            <Footer />
          </Route>
          <Route path="/about">About</Route>
          <Route path="/menu">Menu</Route>
          <Route path="/booking">
            <BookingPage />
          </Route>
          <Route path="/orderOnline">Order Online</Route>
          <Route path="/login">Login</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
