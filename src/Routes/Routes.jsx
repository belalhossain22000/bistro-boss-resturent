import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../LayOut/Main";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../shared/Secret/Secret";
import PrivetRout from "./PrivetRout";
import DashBord from "../LayOut/DashBord";
import MyCart from "../pages/Dashbord/MyCart";
import AllUsers from "../pages/Dashbord/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/menu",
          element:<Menu></Menu>
        },
        {
          path:"/order/:category",
          element:<Order></Order>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
        {
          path:"/secret",
          element:<PrivetRout><Secret></Secret></PrivetRout>
        },
    ]
  },
  {
    path:"/dashboard",
    element:<PrivetRout><DashBord></DashBord></PrivetRout>,
    children:[
      {
        path:'mycart',
        element:<MyCart></MyCart>
      },
      {
        path:'allusers',
        element:<AllUsers></AllUsers>
      },
    ]
  }
]);
