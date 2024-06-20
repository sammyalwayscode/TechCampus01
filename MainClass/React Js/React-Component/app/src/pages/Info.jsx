import { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [storeName, setStoreName] = useState(() => {
    const saveNames = localStorage.getItem("storeName");
    return saveNames ? JSON.parse(saveNames) : [];
  });

  const postName = () => {
    setStoreName([...storeName, { myName: name }]);
  };

  const clearNames = () => {
    localStorage.removeItem("storeName");
    setStoreName([]);
  };

  useEffect(() => {
    localStorage.setItem("storeName", JSON.stringify(storeName));
  }, [storeName]);

  return (
    <div
      style={{
        minHeight: "90vh",
        backgroundColor: "lightskyblue",
      }}
    >
      <h1>This is the Info page</h1>
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
      <button onClick={clearNames}>Clear Data</button>
    </div>
  );
};

export default Info;
