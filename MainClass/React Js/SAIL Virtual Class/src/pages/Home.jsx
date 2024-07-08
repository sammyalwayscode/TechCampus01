/* eslint-disable react/prop-types */
import Hero from "../components/Hero";
import AfterHero from "../components/AfterHero";

const Home = (props) => {
  return (
    <div>
      <h1>This is the Home Page and my name is {props.myName} </h1>
      <Hero />
      <AfterHero />
    </div>
  );
};

export default Home;
