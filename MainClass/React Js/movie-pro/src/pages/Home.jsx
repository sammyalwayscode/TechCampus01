import styled from "styled-components";
import HeroSlider from "../components/HeroSlider";
import Company from "../components/Company";
import Recommended from "../components/Recommended";

const Home = () => {
  return (
    <Container>
      <HeroSlider />
      <Company />
      <Recommended />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  background-image: url("./assets/images/home-background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 70px;
  /* overflow-x: hidden; */
`;
