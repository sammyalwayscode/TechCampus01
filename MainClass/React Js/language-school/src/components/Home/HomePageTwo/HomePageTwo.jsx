import "./HomePageTwo.css";
import BeLangComp from "../../block/BeLangComp/BeLangComp";
import HomeTwoImage from "../../../assets/webp/heroImage2.webp";

const HomePageTwo = () => {
  return (
    <div className="HomTwoContainer">
      <div className="HomeTwoWrapper">
        <div className="HomeTwoText">
          <BeLangComp />
          <h1>
            <span style={{ color: "#5F2A5D" }}>Online Language School</span>
            <span style={{ color: "#FF885E" }}> For Adults & Children</span>
          </h1>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula.
          </p>

          <section>
            <main className="MainBar">
              <div className="namePercent">
                <div className="mainName">Ut odio aliquam at eleifend</div>
                <div className="mainPercent">70%</div>
              </div>
              <div className="percentBar">
                <div className="Bar1" />
              </div>
            </main>
            <main className="MainBar">
              <div className="namePercent">
                <div className="mainName">Ut odio aliquam at eleifend</div>
                <div className="mainPercent">96%</div>
              </div>
              <div className="percentBar">
                <div className="Bar2" />
              </div>
            </main>
            <main className="MainBar">
              <div className="namePercent">
                <div className="mainName">Ut odio aliquam at eleifend</div>
                <div className="mainPercent">15%</div>
              </div>
              <div className="percentBar">
                <div className="Bar3" />
              </div>
            </main>
          </section>
        </div>
        <div className="HomeTwoImage">
          <img src={HomeTwoImage} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default HomePageTwo;
