import "./Header.css";
import myLogo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerWrapper">
        <main className="logoNav">
          <div className="logo">
            <img src={myLogo} alt="logo" />
          </div>
          <div className="navigations">
            <nav className="navs">Features</nav>
            <nav className="navs">Company</nav>
            <nav className="navs">Career</nav>
            <nav className="navs">About</nav>
          </div>
        </main>
        <main className="loginRegister">
          <span className="login">LogIn</span>
          <button className="headerBut">Register</button>
        </main>
      </div>
    </div>
  );
};

export default Header;
