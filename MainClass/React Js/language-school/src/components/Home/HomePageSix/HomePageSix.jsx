import { FaArrowRight } from "react-icons/fa";
import "./HomePageSix.css";

const HomePageSix = () => {
  return (
    <div className="homeSixContainer">
      <div className="homeSixWrapper">
        <div className="joinDiv">
          <h1>
            <span>
              Join the group of <br /> students from all <br />
            </span>{" "}
            <span
              style={{
                color: "#E87A5E",
              }}
            >
              over the world
            </span>
          </h1>
          <button>
            <span>About Us</span>
            <FaArrowRight />
          </button>
        </div>
        <div className="percentDiv">
          <main>Icons</main>
          <div className="ninityTwo">
            <h1>92%</h1>
            <span>
              Of Satisfied <br /> students
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSix;
