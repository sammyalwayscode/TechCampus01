import { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState(false);
  console.log(name);

  const handleToogle = () => {
    setToggle(!toggle);
  };

  console.log(toggle);

  return (
    <Container>
      <h2>Form Fild</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input type="email" placeholder="Email" />
      <br />
      <input type="text" placeholder="Address" />
      <br />
      <button onClick={handleToogle}>Submmit</button>

      {toggle ? <h1> Welcome {name} </h1> : null}
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  height: 100vh;
  background-color: darkcyan;
  color: #fff;
  padding: 30px;
`;
