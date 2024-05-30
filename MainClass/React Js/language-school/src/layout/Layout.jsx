import { Outlet } from "react-router-dom";
import Header from "../static/header/Header";
import Footer from "../static/footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
