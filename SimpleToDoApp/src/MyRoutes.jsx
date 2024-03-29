import { createBrowserRouter } from "react-router-dom";
import { App } from "../src/App";
import { Home } from "./pages/Home"
import { About } from "./pages/About";
import { NewTask } from "./pages/NewTask";
import { EditTask } from "./pages/EditTask";

const MyRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Houve um problema</p>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sobre",
        element: <About />
      },
      {
        path: "newtask",
        element: <NewTask />
      },
      {
        path: "edittask/:id",
        element: <EditTask />
      }
    ],
  },
]);

export default MyRoutes;