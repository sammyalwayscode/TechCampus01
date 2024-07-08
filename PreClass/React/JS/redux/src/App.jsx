// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decreanment, increanment, increaseByAmount } from "./state/state";

function App() {
  // const [count] = useState(0);

  const stateCount = useSelector((state) => state.myReducer.count);
  const dispatcher = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1> {stateCount} </h1>

        {/* <button onClick={() => setCount((count) => count + 1)}>
          + count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          - count is {count}
        </button> */}
        <button
          onClick={() => {
            dispatcher(increanment());
          }}
        >
          {" "}
          Add
        </button>
        <button
          onClick={() => {
            dispatcher(increaseByAmount(10));
          }}
        >
          {" "}
          Add
        </button>
        <button
          onClick={() => {
            dispatcher(decreanment());
          }}
        >
          Sub
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
