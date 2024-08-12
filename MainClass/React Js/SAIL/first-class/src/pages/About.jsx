import styled from "styled-components";
import { useState } from "react";

const About = () => {
  const [num, setNum] = useState(0);
  console.log(num);

  const addNum = () => {
    setNum(num + 5);
  };

  const subtractNum = () => {
    setNum(num - 5);
  };

  return (
    <Container>
      <h2>Number Increase</h2>
      <h1> {num} </h1>
      <button onClick={addNum}>Add</button>
      <button onClick={subtractNum}>Minus</button>
    </Container>
  );
};

export default About;

const Container = styled.div`
  height: 100vh;
  background-color: darkmagenta;
  padding: 20px;
  h2 {
    color: cyan;
  }
  h1 {
    font-size: 50px;
    color: #fff;
  }
`;
