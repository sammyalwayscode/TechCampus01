import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" p-5 flex justify-around">
      <Link to="/">
        <nav className=" cursor-pointer">UserTableAPI</nav>
      </Link>
      <Link to="/weather">
        <button className=" cursor-pointer">WeatherAPI</button>
      </Link>
      <Link to="/store">
        <button className=" cursor-pointer">Store</button>
      </Link>
    </div>
  );
};

export default Header;
