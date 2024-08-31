import Table from "./pages/Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./static/Header";
import Weather from "./pages/Weather";
import Store from "./pages/store/Store";
import StoreDetail from "./pages/store/StoreDetail";
import { GlobalState } from "./global/GlobalContext";

const App = () => {
  return (
    <div>
      <GlobalState>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Table />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/store" element={<Store />} />
            <Route path="/detail/:id" element={<StoreDetail />} />
          </Routes>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
};

export default App;
