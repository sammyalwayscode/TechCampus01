import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Courses from "../pages/courses/Courses";
import About from "../pages/about/About";
import Teacher from "../pages/teacher/Teacher";
import Contact from "../pages/contact/Contact";
import Layout from "../layout/Layout";

export const mainRoute = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/teacher",
        element: <Teacher />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
