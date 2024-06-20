import { useState } from "react";
import Header from "../header/Header";

const Hook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState(false);

  const addCount = () => {
    setCount(count + 1);
  };

  const toggleChange = () => {
    setToggle(!toggle);
  };

  console.log(toggle);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <div>
        <button>Subtract</button>
        <h1> {count} </h1>
        <button onClick={addCount}>Add</button>
      </div>

      <br />
      <br />
      <br />
      <div
        style={{
          flexDirection: "column",
        }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="What is your name"
        />
        <button onClick={toggleChange}>Proceed</button>

        {toggle ? <h1>{name}</h1> : null}
      </div>
    </div>
  );
};

export default Hook;
