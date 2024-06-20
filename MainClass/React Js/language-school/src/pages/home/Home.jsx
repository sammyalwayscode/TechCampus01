import Countries from "../../components/Home/Countries/Countries";
import HeroPage from "../../components/Home/HeroPage/HeroPage";
import HomePageFive from "../../components/Home/HomePageFive/HomePageFive";
import HomePageFour from "../../components/Home/HomePageFour/HomePageFour";
import HomePageSix from "../../components/Home/HomePageSix/HomePageSix";
import HomePageThree from "../../components/Home/HomePageThree/HomePageThree";
import HomePageTwo from "../../components/Home/HomePageTwo/HomePageTwo";

const Home = () => {
  return (
    <div>
      <HeroPage />
      <Countries />
      <HomePageTwo />
      <HomePageThree />
      <HomePageFour />
      <HomePageFive />
      <HomePageSix />
    </div>
  );
};

export default Home;
