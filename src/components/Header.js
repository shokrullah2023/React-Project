import logo from "../images.png";

function Header() {
  return (
    <>
      <header>
        <meta
          name="description"
          content="Restaurant websit that represent Little Lemon"
        />
        <meta name="og:title" content="" />
        <meta name="og:image" content="../images.png" />
        <img src={logo} alt="logo-Pic" />
      </header>
    </>
  );
}

export default Header;
