import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        height: "100px",
        backgroundColor: "lightgreen",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontSize: "20px",
        fontWeight: 800,
        cursor: "pointer",
      }}
    >
      <Link to="/">
        <nav>My Hooks</nav>
      </Link>

      <Link to="/props">
        <nav>Props</nav>
      </Link>
    </div>
  );
};

export default Header;
