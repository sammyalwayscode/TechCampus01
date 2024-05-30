import "./HeroPage.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import heroImage from "../../../assets/webp/heroImage.webp";

const HeroPage = () => {
  return (
    <div className="heroContainer">
      <div className="heroBox">
        <div className="heroWrapper">
          <div className="heroTextArea">
            <span className="heroTextCaption">BeLanguageSchool</span>
            <h1>
              <span
                style={{
                  color: "#ff885e",
                }}
              >
                Hello!
              </span>
              <br />
              <span
                style={{
                  color: "#5f2a5d",
                }}
              >
                Buongiorno! Hej!
              </span>
            </h1>
            <h3>
              Quam arcy vestibulim, quisque sed est vitaee. Elit <br /> amet
              tristique sagittis
            </h3>
            <button>
              <span>See Cources</span> <FaLongArrowAltRight />
            </button>
          </div>
          <div className="HeroimageArea">
            <img src={heroImage} alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
