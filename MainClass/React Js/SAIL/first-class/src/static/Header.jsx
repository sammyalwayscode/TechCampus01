// import "./Header.css";

import styled from "styled-components";
import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className="container">
//       <section>
//         <h2>Social media Dashboard</h2>
//       </section>
//       <section>Dark mode</section>
//     </div>
//   );
// };

// export default Header;

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <nav>Home</nav>
      </Link>

      <Link to="/about">
        <nav>About</nav>
      </Link>

      <Link to="/contact">
        <nav>Contact</nav>
      </Link>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;

  nav {
    cursor: pointer;
  }
`;
