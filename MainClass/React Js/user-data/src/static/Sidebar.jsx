/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <nav>Home</nav>
        </Link>
        <Link to="/user">
          <nav>User</nav>
        </Link>
        <nav>Todo</nav>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-end;
  }
`;
const Wrapper = styled.div`
  height: 40vh;
  width: 100%;
  background-color: #ddd;
  position: fixed;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  nav {
    margin: 20px 0px;
  }
`;
