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
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">ABOUT</a>
          </li>
          <li>
            <a href="/">MENU</a>
          </li>
          <li>
            <a href="/">RESERVATION</a>
          </li>
          <li>
            <a href="/">ORDER ONLINE</a>
          </li>
          <li>
            <a href="/">LOGIN</a>
          </li>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
