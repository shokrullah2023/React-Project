import logo from "../logo.svg";
import "../App.css";

function Nav() {
  return (
    <div classname="main-nav">
      <div>
        <head>
          <meta
            name="description"
            content="Restaurant websit that represent Little Lemon"
          />
          <meta name="og:title" content="" />
          <meta name="og:image" content="../images.png" />
          <img src={logo} alt="logo-Pic" />
        </head>
      </div>
      <div>
        <nav>
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
