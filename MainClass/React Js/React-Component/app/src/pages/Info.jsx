import { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [storeNames, setStoreNames] = useState(() => {
    const saveName = localStorage.getItem("storeNames");
    return saveName
      ? JSON.parse(saveName)
      : [
          { userName: "Kola" },
          { userName: "Solomon" },
          { userName: "Matthew" },
        ];
  });
  // console.log(name);

  const newName = () => {
    setStoreNames([...storeNames, { userName: name }]);
    setName("");
  };

  const clearNames = () => {
    localStorage.removeItem("storeNames");
    setStoreNames([]);
  };

  useEffect(() => {
    localStorage.setItem("storeNames", JSON.stringify(storeNames));
  }, [storeNames]);

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
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />

        <br />
        <button onClick={newName}>Submmit</button>
      </section>
      <section>
        <h2>List of Names</h2>
        <ul>
          {storeNames.map((data, index) => (
            <li key={index}>
              {"  "}
              {index} {data.userName}
            </li>
          ))}
        </ul>
      </section>
      <button onClick={clearNames}>Clear Data</button>
    </div>
  );
};

export default Info;
