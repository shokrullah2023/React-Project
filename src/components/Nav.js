import logo from "../logo.svg";
import "../styles/Nav.css";
import "../styles/Queries.css";
import BookingPage from "./BookingPage";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import {
  BrowserRouter as Link,
  Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

function Nav() {
  return (
    <div className="main-nav">
      <div>
        <header>
          <img src={logo} alt="logo-Pic" />
        </header>
      </div>
      <Router>
        <div>
          <nav className="nav-list">
            <ul>
              <li>
                <Link className="nav-elem" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-elem" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-elem" to="/menu">
                  Menu
                </Link>
              </li>
              <li>
                <Link className="nav-elem" to="/BookingPage">
                  Reservation
                </Link>
              </li>
              <li>
                <Link className="nav-elem" to="/orderOnline">
                  Order Online
                </Link>
              </li>
              <li>
                <Link className="nav-elem" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
          <Router>
            <Switch>
              <Route path="/">Home</Route>
              <Route path="/about">About</Route>
              <Route path="/menu">Menu</Route>
              <Route path="/BookingPage" element={<BookingPage />} />
              <Route path="/orderOnline">Order Online</Route>
              <Route path="/login">Login</Route>
            </Switch>
          </Router>
        </div>
      </Router>
    </div>
  );
}

export default Nav;
