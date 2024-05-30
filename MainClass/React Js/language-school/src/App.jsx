import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./routes/Router";

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRoute} />
    </div>
  );
};

// iu

export default App;
