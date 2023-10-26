import logo from "../logo.svg";
import "../styles/Nav.css";
import "../styles/Queries.css";

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
        <nav className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Reservation</a>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
