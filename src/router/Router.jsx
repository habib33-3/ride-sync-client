import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../Error/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRouter from "./PrivateRouter";
import AddService from "../pages/AddService/AddService";
import AllServices from "../pages/AllServices/AllServices";
import useAxios from "../hooks/useAxios";
import Details from "../pages/Details/Details";

const axios = useAxios();

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/addService",
        element: (
          <PrivateRouter>
            <AddService />
          </PrivateRouter>
        ),
      },

      {
        path: "/services",
        element: <AllServices />,
        loader: () => axios.get("/services"),
      },

      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRouter>
            <Details />
          </PrivateRouter>
        ),
      },
    ],
  },
]);
