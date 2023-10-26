import "../styles/Hero.css";
import "../App.css";
import image from "../refined.jpg";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero">
        <div className="hero-desc">
          <h1 className="hero-title">Little Lemon</h1>
          <h4 className="hero-locate">Chicago</h4>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            tranditional recipes served with a modern twist.
          </p>
          <button className="hero-btn">Reserve a Table</button>
        </div>
        <div className="hero-img">
          <img className="hero-img img" src={image} alt="hero image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
