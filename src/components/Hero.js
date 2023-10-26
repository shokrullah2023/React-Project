import "../styles/Hero.css";
import "../App.css";
import image from "../restauranfood.jpg";

function Hero() {
  return (
    <div className="hero-section">
      <div className="Hero-desc">
        <p>Little Lemon</p>
      </div>
      <div className="hero-img">
        <img src={image} alt="hero image" />
      </div>
    </div>
  );
}

export default Hero;
