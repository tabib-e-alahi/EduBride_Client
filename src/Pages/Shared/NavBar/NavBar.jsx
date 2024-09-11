import "./NavBar.css";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import ProfileDropdown from "./ProfileDropdown";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  const navOptions = (
    <>
      <li className="navOptions">
        <NavLink className="  " to="/">
          Home
        </NavLink>
      </li>
      <li className="navOptions">
        <NavLink className=" " to="/allCourses">
          Courses
        </NavLink>
      </li>
      <li className="navOptions">
        <NavLink className=" " to="/courses">
          Courses
        </NavLink>
      </li>
      <li className="navOptions">
        <NavLink className=" " to="/teach">
          Teach on EduBridge
        </NavLink>
      </li>
      <li className="navOptions">
        <NavLink className=" " to="/blogs">
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      {/* fixed z-50 w-full bg-white bg-opacity-50 */}
      <div className="py-3 shadow-md bg-white shadow-gray-400">
        <div className="navbar nav_width mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
              >
                {navOptions}
              </ul>
            </div>
            {/* <a className=" font-bold text-3xl">KnowYourTutor</a> */}
            <img className="w-40 h-16" src={logo} alt="Logo" />
          </div>
          <div className="navbar-center hidden lg:flex items-end">
            <ul className="menu pb-0 menu-horizontal px-1 noto-sans-font text-[15px]">
              {navOptions}
            </ul>
          </div>
          <div className="navbar-end space-x-4">
            {user ? (
              <details className="dropdown dropdown-bottom dropdown-end">
                {user?.photoURL ? (
                  <summary className="btn">
                    <img
                      alt="Profile Image"
                      className=" w-10 h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-100 dark:ring-violet-600 dark:ring-offset-gray-100"
                      src={user?.photoURL}
                    />
                  </summary>
                ) : (
                  <summary className="btn hover:bg-[#f60] size-12 flex justify-center items-center text-xl font-bold text-white rounded-full  bg-[#f60]">
                    {user?.displayName[0]}
                  </summary>
                )}
                <ul className="menu  dropdown-content  z-10   ">
                  <ProfileDropdown></ProfileDropdown>
                </ul>
              </details>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex-none border-2 border-indigo-500 px-3.5 py-2  font-semibold text-indigo-500 shadow-sm hover:bg-indigo-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Log in
                </Link>
                <Link
                  to="/signUp"
                  className="flex-none  bg-indigo-500 px-3.5 py-2.5  font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
