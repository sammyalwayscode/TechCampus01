import BeLangComp from "../../block/BeLangComp/BeLangComp";
import "./HomePageFive.css";
import ladyOne from "../../../assets/webp/ladyOne.webp";

const HomePageFive = () => {
  return (
    <div className="HomeFiveContainer">
      <div className="HomeFiveWrapper">
        <BeLangComp />
        <h1>Our teachers</h1>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; <br /> Donec velit neque, auctor sit amet
          aliquam vel, ullamcorper sit amet ligula.
        </p>
        <section className="profileHolder">
          <main className="mainProfile">
            <div className="profileImageDiv">
              <img src={ladyOne} alt="" />
            </div>
            <h3>Leslie Alexander</h3>
            <span>Spanish</span>
            <hr />
            <p>
              Consectetur amet magna imperdiet sit viverra. Cursus tempor,
              malesuada magna odio vitae libero purus
            </p>
          </main>
          <main className="mainProfile">
            <div className="profileImageDiv">
              <img src={ladyOne} alt="" />
            </div>
            <h3>Leslie Alexander</h3>
            <span>Spanish</span>
            <hr />
            <p>
              Consectetur amet magna imperdiet sit viverra. Cursus tempor,
              malesuada magna odio vitae libero purus
            </p>
          </main>
          <main className="mainProfile">
            <div className="profileImageDiv">
              <img src={ladyOne} alt="" />
            </div>
            <h3>Leslie Alexander</h3>
            <span>Spanish</span>
            <hr />
            <p>
              Consectetur amet magna imperdiet sit viverra. Cursus tempor,
              malesuada magna odio vitae libero purus
            </p>
          </main>
        </section>
      </div>
    </div>
  );
};

export default HomePageFive;
