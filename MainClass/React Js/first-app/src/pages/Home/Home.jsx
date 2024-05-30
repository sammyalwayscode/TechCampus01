import "./Home.css";
import HeroImage from "../../assets/image-hero-desktop.png";

const Home = () => {
  return (
    <div className="HomeContainer">
      <div className="textContainer">
        <h1>
          Make <br />
          remote work
        </h1>
        <p>
          Get your team in sync, no matter your location. <br /> Streamline
          processes, create team rituals, and <br /> watch productivity soar.
        </p>
        <button>Learn More</button>

        <div className="Icons">
          <img src="" alt="Img 1" />
          <img src="" alt="Img 2" />
          <img src="" alt="Img 3" />
          <img src="" alt="Img 4" />
        </div>
      </div>
      <div className="imageContainer">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Home;
