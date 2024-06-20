import "./HomePageFour.css";
import { FaArrowRight } from "react-icons/fa";
import BeLangComp from "../../block/BeLangComp/BeLangComp";
import meetOnline from "../../../assets/webp/language4-home-pic2.webp";

const HomePageFour = () => {
  return (
    <div className="homeFourContainer">
      <div className="homeFourWrapper">
        <div className="homeFourImageHold">
          <img src={meetOnline} alt="" />
        </div>
        <div className="homeFourText">
          <BeLangComp />
          <h2>Quis vulputate nibh aliquet libero, mi ultricies arcu, arcu.</h2>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula.
          </p>
          <button>
            <span>Read More</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePageFour;
