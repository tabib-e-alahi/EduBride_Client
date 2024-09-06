import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ALLCourses from "../Pages/AllCourses/ALLCourses";

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
          path: '/allCourses',
          element: <ALLCourses></ALLCourses>
        }
    ]
  },
]);
