import styled from "styled-components";
// import { HiUserGroup } from "react-icons/hi2";
import { FaHouseUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => {
    setToggle(!toggle);
  };

  console.log(toggle);

  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>
            <FaHouseUser />
          </Logo>
          <Navagation>
            <MainNav to="/">
              <nav>Home</nav>
            </MainNav>
            <MainNav to="/user">
              <nav>User</nav>
            </MainNav>
            <MainNav to="/todo">
              <nav>Todo</nav>
            </MainNav>
          </Navagation>
          <Sign>
            <span>Login</span>
            <button>Sign Up</button>
          </Sign>

          <MobileNav onClick={changeToggle}>
            {toggle ? <GiCancel /> : <IoReorderThree />}
          </MobileNav>
        </Wrapper>
      </Container>
      {/* this is the side bar component */}
      {toggle ? <Sidebar /> : null}
    </div>
  );
};

export default Header;

const Container = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fafb;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 35px;
`;
const Navagation = styled.div`
  display: flex;

  nav {
    margin: 0px 15px;
    font-weight: 500;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
const Sign = styled.div`
  button {
    background-color: rgb(37 99 235);
    border: none;
    outline: none;
    height: 35px;
    width: 150px;
    font-family: Montserrat;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin-left: 30px;
  }
  span {
    font-weight: 500;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const MainNav = styled(NavLink)`
  text-decoration: none;
  color: #000;

  &.active {
    color: rgb(37 99 235);
  }
`;

const MobileNav = styled.div`
  font-size: 40px;
  cursor: pointer;
  display: none;

  @media (max-width: 800px) {
    display: flex;
  }
`;
