import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src="/assets/images/logo.svg" alt="" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="/assets/images/home-icon.svg" alt="" />
          <span>Home</span>
        </a>
        <a href="#">
          <img src="/assets/images/search-icon.svg" alt="" />
          <span>Search</span>
        </a>
        <a href="#">
          <img src="/assets/images/watchlist-icon.svg" alt="" />
          <span>Watchlist</span>
        </a>
        <a href="#">
          <img src="/assets/images/original-icon.svg" alt="" />
          <span>Originals</span>
        </a>
        <a href="#">
          <img src="/assets/images/movie-icon.svg" alt="" />
          <span>Movies</span>
        </a>
        <a href="#">
          <img src="/assets/images/series-icon.svg" alt="" />
          <span>Series</span>
        </a>
      </NavMenu>
      <Login>Login</Login>
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  height: 70px;
  background-color: #040714;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 36px;
  z-index: 999;
`;
const Logo = styled.div`
  width: 80px;
  padding: 0;
  /* background-color: red; */
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  margin-right: auto;
  margin-left: 25px;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: flex-end;

  @media (max-width: 900px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
  }

  img {
    width: 20px;
    height: 20px;
    z-index: auto;
  }

  span {
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08px;
    text-transform: uppercase;
  }
`;
const Login = styled.a`
  background-color: (0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
