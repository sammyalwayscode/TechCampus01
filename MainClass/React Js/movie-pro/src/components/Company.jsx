import styled from "styled-components";

const Company = () => {
  return (
    <Container>
      <Card>
        <img src="/assets/images/viewers-disney.png" alt="" />
        <video autoPlay muted loop={true} playsInline={true}>
          <source src="/assets/videos/disney.mp4" type="video/mp4" />
        </video>
      </Card>
      <Card>
        <img src="/assets/images/viewers-pixar.png" alt="" />
        <video autoPlay muted loop={true} playsInline={true}>
          <source src="/assets/videos/pixar.mp4" type="video/mp4" />
        </video>
      </Card>
      <Card>
        <img src="/assets/images/viewers-marvel.png" alt="" />
        <video autoPlay muted loop={true} playsInline={true}>
          <source src="/assets/videos/marvel.mp4" type="video/mp4" />
        </video>
      </Card>
      <Card>
        <img src="/assets/images/viewers-starwars.png" alt="" />
        <video autoPlay muted loop={true} playsInline={true}>
          <source src="/assets/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </Card>
      <Card>
        <img src="/assets/images/viewers-national.png" alt="" />
        <video autoPlay muted loop={true} playsInline={true}>
          <source
            src="/assets/videos/national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Card>
    </Container>
  );
};

export default Company;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 40px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Card = styled.div`
  padding-top: 56%;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: all 250ms;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  img {
    /* inset: 0px; */
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 1;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    transform: scale(1.05);
    video {
      opacity: 1;
    }
  }
`;
