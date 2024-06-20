import { useState } from "react";

const Landing = () => {
  const [name, setName] = useState("");
  const [storeName, setStoreName] = useState([
    { myName: "Johnson" },
    { myName: "Williams" },
  ]);

  const postName = () => {
    setStoreName([...storeName, { myName: name }]);
  };

  return (
    <div>
      <section>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <button onClick={postName}>Submmit</button>
      </section>
      <section>
        <h2>List of Names</h2>
        <ul>
          {storeName.map((data, index) => (
            <li key={index}>{data.myName}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Landing;
