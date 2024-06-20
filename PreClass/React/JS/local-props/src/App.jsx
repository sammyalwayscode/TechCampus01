import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestProps from "./pages/TestProps";
import MoreItemsPost from "./pages/MoreItemsPost";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestProps />} />
          <Route path="/more" element={<MoreItemsPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
