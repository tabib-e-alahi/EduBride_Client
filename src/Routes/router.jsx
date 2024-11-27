import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ALLCourses from "../Pages/AllCourses/ALLCourses";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import MyCart from "../Pages/MyCart/MyCart";
import Dashboard from "../Layout/Dashboard";

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
          element: <ALLCourses></ALLCourses>
        },
        {
          path: '/course/:id',
          element: <CourseDetails></CourseDetails>
        },
        {
          path: '/mycart/:email',
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        },
    ]
  },
]);
