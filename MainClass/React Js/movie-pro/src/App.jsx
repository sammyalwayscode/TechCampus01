import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./static/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
