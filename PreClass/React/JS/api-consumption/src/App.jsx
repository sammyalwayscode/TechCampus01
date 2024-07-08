import { BrowserRouter, Routes, Route } from "react-router-dom";
import JsonPlaceHolder from "./pages/JsonPlaceHolder";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jsonplaceholder" element={<JsonPlaceHolder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
