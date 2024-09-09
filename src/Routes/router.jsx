import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ALLCourses from "../Pages/AllCourses/ALLCourses";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/signUp',
            element: <SignUp></SignUp>
        },
        {
          path: '/allCourses',
          element: <PrivateRoute><ALLCourses></ALLCourses></PrivateRoute>
        },
    ]
  },
]);
