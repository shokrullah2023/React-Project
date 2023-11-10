import logo from "../logo.svg";
import "../styles/Nav.css";
import "../styles/Queries.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="main-nav">
      <div>
        <header>
          <img src={logo} alt="logo-Pic" />
        </header>
      </div>
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
              <Link className="nav-elem" to="/booking">
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
      </div>
    </div>
  );
}

export default Nav;
