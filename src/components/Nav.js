import logo from "../logo.svg";
import "../styles/Nav.css";
import "../styles/Queries.css";
import BookingPage from "./BookingPage";
import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";

function Nav() {
  return (
    <div className="main-nav">
      <div>
        <header>
          {/* <meta
            name="description"
            content="Restaurant websit that represent Little Lemon"
          />
          <meta name="og:title" content="" />
          <meta name="og:image" content="../images.png" /> */}
          <img src={logo} alt="logo-Pic" />
        </header>
      </div>
      <div>
        <Router>
          <nav className="nav-list">
            <ul>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/menu">Menu</Link>
              <li>
                <Link to="/BookingPage">Reservation</Link>
              </li>
              <Link to="/order online">Order Online</Link>
              <Link to="/login">Login</Link>
            </ul>
          </nav>
          <Switch>
            <Route path="/">Home</Route>
            <Route path="/about">About</Route>
            <Route path="/menu">Menu</Route>
            <Route path="/BookingPage" Component={BookingPage} />
            <Route path="/order online">Order Online</Route>
            <Route path="/login">Login</Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default Nav;
