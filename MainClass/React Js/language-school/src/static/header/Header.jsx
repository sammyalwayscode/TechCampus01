import "./Header.css";
import logo from "../../assets/svg/language4.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="generalHeaderContainer">
      <div className="generalHeaderWrapper">
        <div className="headerLogo">
          <img src={logo} alt="logo" />
        </div>
        <div className="headerNav">
          <Link className="link" to="/">
            <nav>Home</nav>
          </Link>
          <Link className="link" to="/courses">
            <nav>Courses</nav>
          </Link>
          <Link className="link" to="/about">
            <nav>About Us</nav>
          </Link>
          <Link className="link" to="/teacher">
            <nav>Teachers</nav>
          </Link>
          <Link className="link" to="/contact">
            <nav>Contact</nav>
          </Link>
          <RxHamburgerMenu className="burgerMenu" />
          <button>Call Us</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
