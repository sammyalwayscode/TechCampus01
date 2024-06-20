import { createBrowserRouter } from "react-router-dom";
import MyHook from "../hooks/MyHook";
import MyProps from "../props/MyProps";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MyHook />,
  },
  {
    path: "/props",
    element: <MyProps />,
  },
]);
