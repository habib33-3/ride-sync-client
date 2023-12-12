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
import ManageService from "../pages/ManageService/ManageService";
import UpdateService from "../pages/UpdateService/UpdateService";
import Schedule from "../pages/Schedule/Schedule";
import WriteNow from "../pages/WriteNow/WriteNow";

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

      {
        path: "/manageService",
        element: (
          <PrivateRouter>
            <ManageService />
          </PrivateRouter>
        ),
      },

      {
        path: "/updateService/:id",
        element: (
          <PrivateRouter>
            <UpdateService />
          </PrivateRouter>
        ),
      },

      {
        path: "/schedule",
        element: (
          <PrivateRouter>
            <Schedule />
          </PrivateRouter>
        ),
      },
      {
        path: "/writeNow",
        element: (
          <PrivateRouter>
            <WriteNow />
          </PrivateRouter>
        ),
      },
    ],
  },
]);
