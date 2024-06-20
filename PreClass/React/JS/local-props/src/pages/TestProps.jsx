import { useEffect } from "react";
import { useState } from "react";

const TestProps = () => {
  const [name, setName] = useState("");
  const [viewName, setViewName] = useState(() => {
    const savedNames = localStorage.getItem("viewName");
    return savedNames ? JSON.parse(savedNames) : [];
  });
  const postName = () => {
    setViewName([...viewName, { name }]);
  };

  const clearName = () => {
    localStorage.removeItem("viewName");
    setViewName([]);
  };

  console.log(viewName);
  console.log(name);

  useEffect(() => {
    localStorage.setItem("viewName", JSON.stringify(viewName));
  }, [viewName]);
  return (
    <div>
      <h1>Test</h1>
      <input
        type="text"
        name=""
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={postName}>Enter</button>
      <ul>
        {" "}
        {viewName.map((itme, i) => (
          <li key={i}>
            {i}: {itme.name}{" "}
          </li>
        ))}
      </ul>

      <button onClick={clearName}>CLear Data</button>
    </div>
  );
};

export default TestProps;
