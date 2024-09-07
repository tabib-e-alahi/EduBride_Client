import { Link } from "react-router-dom";
import "./Login.css";
import login from "../../../assets/login.png";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const handleLogin = () => {};

  return (
    <div className="h-screen flex items-center bg_custom">
      <div className="grid grid-cols-2 login_form_glass  max-w-6xl mx-auto h-5/6  shadow-lg rounded-sm shadow-slate-600">
        <div className="flex justify-center items-center ">
          <img className="w-2/3 mx-auto" src={login} alt="" />
        </div>
        <div className="font-sans w-full  my-auto ">
          <h1 className="text-center  text-4xl font-bold mb-6 text-[#172734]">
            Log in
          </h1>
          {/* social log in  */}

          <div className="rounded-sm">
            <form onSubmit={handleLogin} className="w-2/3 mx-auto">
              <div className="flex flex-col space-y-8">
                <div className="flex flex-col gap-1">
                  <input
                    type="email"
                    name="email"
                    className=" p-3 rounded-lg form-input placeholder:text-gray-600"
                    placeholder="Enter Email"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <input
                    type="password"
                    name="password"
                    className="p-3 rounded-lg form-input  placeholder:text-gray-600"
                    placeholder="Enter Password"
                  />
                </div>

                <div className="w-2/3 mx-auto text-center">
                  <button className="px-6 py-3  uppercase font-medium  rounded-sm text-white w-full bg-[#a6776a]">
                    Login
                  </button>
                </div>
              </div>
            </form>

            <div className="flex justify-center items-center gap-1">
              <p className="font-normal">New Here?</p>
              <Link to="/signUp">
                <button className="btn btn-link pl-0">SignUp</button>
              </Link>
            </div>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
