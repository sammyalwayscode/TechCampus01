import HomeCard from "../components/block/HomeCard";
import logo from "../assets/react.svg";
import logo2 from "../assets/logggg.jpg";
import demo from "../assets/demo.jpg";
import styled from "styled-components";
import Carocel from "../components/Carocel";

const HomePage = () => {
  return (
    <Container>
      <HomeCardHolder>
        <HomeCard
          logo={`${logo}`}
          title="🥇The first framework that lets you visualize your React/NodeJS app 🤯"
          image={`${demo}`}
        />
        <HomeCard
          logo={`${logo2}`}
          title="I’ve worked in IT for over 10 years. Here are 5 things I wish I knew when I started"
        />
        <HomeCard />
      </HomeCardHolder>

      <CarocelHolder>
        <Carocel />
      </CarocelHolder>
    </Container>
  );
};

export default HomePage;

const Container = styled.div``;

const CarocelHolder = styled.div`
  max-width: 90%;
  background-color: yellow;
  margin-right: auto;
  margin-left: auto;
`;

const HomeCardHolder = styled.div`
  display: flex;
  justify-content: center;
`;
