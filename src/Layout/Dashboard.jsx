import { BiPurchaseTag } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { LiaUsersCogSolid } from "react-icons/lia";
import { LuLayoutDashboard } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        {/*admin dashboard side bar */}
        <div className="w-[72px] pt-10  min-h-screen bg-teal text-white text-xl">
          <ul className="flex flex-col bg-[#59389d] justify-center h-full items-center gap-8">
            <li className="w-fit">
              <NavLink
                to="/dashboard/adminHome"
                className="group flex items-center relative w-fit p-0 dashboard-link"
              >
                <LuLayoutDashboard className="w-10 h-8 p-0 text-white"></LuLayoutDashboard>
                <span
                  className={
                    "group-hover:opacity-100 transition-opacity bg-teal px-4 py-2  rounded-sm absolute w-44 text-grey text-2xl  translate-x-12   opacity-0 m-4 mx-auto"
                  }
                >
                  Admin Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/allUsers"
                className="group flex items-center relative w-fit h-fit p-0 dashboard-link"
              >
                <LiaUsersCogSolid className="w-10 h-8 p-0 text-white"></LiaUsersCogSolid>
                <span
                  className={
                    "group-hover:opacity-100 transition-opacity bg-teal px-4 py-2 text-grey rounded-sm absolute  text-2xl w-44 translate-x-12   opacity-0 m-4 mx-auto"
                  }
                >
                  All Users
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/adminEmail"
                className="group flex items-center relative w-fit h-fit p-0 dashboard-link"
              >
                <TfiEmail className="w-8 h-8 p-0 text-white"></TfiEmail>
                <span
                  className={
                    "group-hover:opacity-100 transition-opacity bg-teal px-4 py-2  rounded-sm absolute text-2xl w-44 translate-x-12   opacity-0 m-4 mx-auto"
                  }
                >
                  Email
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manageSubscriptions"
                className="group flex items-center relative w-fit h-fit p-0 dashboard-link"
              >
                <BiPurchaseTag className="w-10 h-8 p-0 text-white"></BiPurchaseTag>
                <span
                  className={
                    "group-hover:opacity-100 transition-opacity bg-teal px-4 py-2 text-grey rounded-sm absolute text-2xl translate-x-12 w-44   opacity-0 m-4 mx-auto"
                  }
                >
                  Subscriptions
                </span>
              </NavLink>
            </li>

            {/* shared nav links */}
            <div className="divider divider-neutral"></div>
            <li>
              <NavLink
                to="/"
                className="group flex items-center relative w-fit h-fit p-0 dashboard-link"
              >
                <IoHomeOutline className="w-10 h-8 p-0 text-white"></IoHomeOutline>
                <span
                  className={
                    "group-hover:opacity-100 transition-opacity bg-teal px-4 py-2 text-grey rounded-sm absolute text-2xl translate-x-12 w-44   opacity-0 m-4 mx-auto"
                  }
                >
                  Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="group flex items-center relative w-fit h-fit p-0 dashboard-link"
              >
                <FaEnvelope className="w-10 h-8 p-0 text-white"></FaEnvelope>
                <span
                  className={
                    "group-hover:opacity-100 transition-opacity bg-teal px-4 py-2 text-grey rounded-sm absolute text-2xl translate-x-12 w-44   opacity-0 m-4 mx-auto"
                  }
                >
                  Contact Us
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
