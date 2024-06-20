import BeLangComp from "../../block/BeLangComp/BeLangComp";
import "./HomePageThree.css";
import IconOne from "../../../assets/svg/language4-home-icon1.svg";
import IconTwo from "../../../assets/svg/language4-home-icon2.svg";
import IconThree from "../../../assets/svg/language4-home-icon3.svg";

const HomePageThree = () => {
  const cardData = [
    {
      cardIcon: `${IconOne}`,
      cardTitle: "Aliquam vehicula viverra",
      cardContent:
        "Curabitur ac leo nunc estibul et mauris vel ante finibus maximus nec ut leo",
    },
    {
      cardIcon: `${IconTwo}`,
      cardTitle: "Blandit pellentes sapientis",
      cardContent:
        "Curabitur ac leo nunc estibul et mauris vel ante finibus maximus nec ut leo",
    },
    {
      cardIcon: `${IconThree}`,
      cardTitle: "Posuere tristique faucibus",
      cardContent:
        "Curabitur ac leo nunc estibul et mauris vel ante finibus maximus nec ut leo",
    },
  ];

  return (
    <div className="HomeThreeContainer">
      <div className="homeThreeWrapper">
        <BeLangComp />
        <h1>Enim nisl in lacus sagittis et. Quis vestibulum vel id.</h1>
        <section className="HomeThreeCardsHolder">
          {cardData.map((data, index) => (
            <main key={index} className="HomThreeCard">
              <div className="HomeThreeCardHolder">
                <div className="HomeThreeIconHold">
                  <img src={data.cardIcon} alt="Icons" />
                </div>
                <h3> {data.cardTitle} </h3>
                <p>{data.cardContent}</p>
              </div>
            </main>
          ))}
        </section>
      </div>
    </div>
  );
};

export default HomePageThree;
