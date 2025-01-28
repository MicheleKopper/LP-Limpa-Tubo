import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Home } from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Navigate to={"/home"} />,
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
