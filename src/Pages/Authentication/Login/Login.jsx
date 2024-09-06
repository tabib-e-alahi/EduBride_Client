import { Link } from "react-router-dom";
import "./Login.css";
import login from "../../../assets/login.png";

const Login = () => {
  const handleLogin = () => {};

  return (
    <div className="grid grid-cols-2 h-screen bg-[#f6f4f1] border-2 ">
      <div className="flex justify-center items-center border-4">
        <img className="w-2/3 mx-auto" src={login} alt="" />
      </div>
      <div className=" lato_font  justify-center items-center">
        <h1 className="text-left  text-2xl font-semibold my-2 text-[#172734]">
          Log In to your Account
        </h1>
        {/* social log in  */}

        <div className="mb-6  rounded-sm  p-6  login-form border">
          {/* <SocialLogin></SocialLogin> */}
          <form onSubmit={handleLogin} className="w-1/2 mx-auto">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="pb-1 ">
                  Enter Email
                </label>
                <input
                  type="text"
                  name="email"
                  className=" p-3 rounded-lg form-input"
                  placeholder="example@example.com"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="" className="pb-1">
                  Enter Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="p-3 rounded-lg form-input"
                  placeholder="password@123"
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
      </div>
    </div>
  );
};

export default Login;
