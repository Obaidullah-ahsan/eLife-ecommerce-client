import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Products from "../pages/Products/Products";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Laptop from "../pages/Laptop/Laptop";
import AllHeadphones from "../pages/AllHeadphones/AllHeadphones";
import AllSmartwatch from "../pages/AllSmartwatch/AllSmartwatch";
import AllPhone from "../pages/AllPhone/AllPhone";
import PrivateRoutes from "../Routes/PrivateRoutes";
import AllTablet from "../pages/AllTablet/AllTablet";
import Services from "../pages/Services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      // Categories section route
      {
        path: "/headphones",
        element: <AllHeadphones></AllHeadphones>,
      },
      {
        path: "/smartwatch",
        element: <AllSmartwatch></AllSmartwatch>,
      },
      {
        path: "/phone",
        element: <AllPhone></AllPhone>,
      },
      {
        path: "/tablet",
        element: <AllTablet></AllTablet>,
      },
      {
        path: "/laptop",
        element: <Laptop></Laptop>,
      },
      // Cart route
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <Cart></Cart>
          </PrivateRoutes>
        ),
      },
      // Wishlist route
      {
        path: "/wishlist",
        element: (
          <PrivateRoutes>
            <Wishlist></Wishlist>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
