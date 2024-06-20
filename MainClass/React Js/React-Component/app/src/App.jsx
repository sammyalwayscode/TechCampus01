import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Info from "./pages/Info";
import CreateInfo from "./pages/CreateInfo";
import Header from "./static/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/info" element={<Info />} />
          <Route path="/create" element={<CreateInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
