import "./NavBar.css";
import logo_black from "../../../assets/logo_black.png";
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import ProfileDropdown from "./ProfileDropdown";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  const [isScrolled, setIsScrolled] = useState(false);

  // ================== navar scroll event handling funtions =================
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  const navOptions = (
    <>
      <li className="navOptions ">
        <NavLink className="" to="/">
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
      <div
        className={`fixed top-0  w-full z-10 transition-all py-1  duration-0 ease-linear transform ${
          isScrolled ? "translate-y-0 duration-700 opacity-90 bg-white shadow-lg" : "translate-y-0 opacity-100 bg-transparent"
        }`}
      >
        <div className="navbar nav_width mx-auto">
          <div className="navbar-start">
            <Link to="/">
              <img className="w-28 h-10 lg:w-44 lg:h-10" src={logo_black} alt="Logo" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu pb-0 menu-horizontal px-1 noto-sans-font text-[15px] ">
              {navOptions}
            </ul>
          </div>
          <div className="navbar-end space-x-4">
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
            {user ? (
              <details className="dropdown dropdown-bottom dropdown-end ">
                {user?.photoURL ? (
                  <summary className="btn bg-transparent hover:bg-transparent">
                    <img
                      alt="Profile Image"
                      className=" w-10 h-10 rounded-full    dark:ring-violet-600 "
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
                  className="flex-none text-lg border-2 border-[#8c52ff] px-3.5 py-1 rounded-sm font-bold text-[#8c52ff] shadow-sm hover:bg-[#b497ed] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8c52ff]"
                >
                  Log In
                </Link>
                <Link
                  to="/signUp"
                  className="flex-none text-lg rounded-sm bg-[#8c52ff] px-3.5 py-1.5  font-semibold text-white shadow-sm hover:bg-[#59389d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8c52ff]"
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
