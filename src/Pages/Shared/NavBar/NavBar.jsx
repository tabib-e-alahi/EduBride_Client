import './NavBar.css'
import logo from '../../../assets/logo.png';


const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>All Classes</a>
      </li>
      <li>
        <a>Courses</a>
      </li>
      <li>
        <a>Events</a>
      </li>
      <li>
        <a>Blogs</a>
      </li>
    </>
  );

  return (
    <div className="bg-base-100   pt-2 pb-4 ">
      <div className="navbar nav_width mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          {/* <a className=" font-bold text-3xl">KnowYourTutor</a> */}
          <img className='w-52 h-20' src={logo} alt="Logo" />
        </div>
        <div className="navbar-center hidden lg:flex items-end">
          <ul className="menu pb-0 menu-horizontal px-1 source-code-pro-class font-semibold text-lg">
           {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
