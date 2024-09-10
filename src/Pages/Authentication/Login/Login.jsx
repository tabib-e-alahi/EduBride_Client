import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import login from "../../../assets/login.png";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { BiSolidError } from "react-icons/bi";

const Login = () => {
  const [credintialErrors, setCredintialErrors] = useState(null);
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((errors) => setCredintialErrors(errors.message));
  };

  return (
    <div className="h-screen flex items-center bg_custom">
      <div className="grid grid-cols-2 login_form_glass  max-w-6xl mx-auto h-5/6  shadow-lg rounded-sm shadow-slate-600">
        <div className="flex justify-center items-center ">
          <img className="w-2/3 mx-auto" src={login} alt="" />
        </div>
        <div className="noto-sans-font w-full  my-auto ">
          <h1 className="text-center  text-4xl font-bold mb-6 text-[#172734]">
            Log in
          </h1>

          {credintialErrors && (
            <div className="w-2/3 mx-auto mb-6 p-4 h-fit  bg-[#fef0ee] text-left flex gap-4 justify-center items-center">
              <BiSolidError className="text-red-600 text-4xl" />
              <p className="text-sm font-bold text-red-600">
                The email address or password you entered were invalid.
              </p>
            </div>
          )}

          <div className="rounded-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 mx-auto">
              <div className="flex flex-col space-y-8">
                <div className="flex flex-col gap-1">
                  <input
                    type="email"
                    name="email"
                    className={`p-3 rounded-md form-input placeholder:text-gray-600 ${
                      errors.email
                        ? "error-input-border shadow-inner  shadow-red-300"
                        : " input-border"
                    }`}
                    placeholder={`${
                      errors.email ? "Please enter valid email" : "Enter email"
                    }`}
                    {...register("email", { required: true })}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <input
                    type="password"
                    name="password"
                    className={`p-3 rounded-md form-input placeholder:text-gray-600 ${
                      errors.password
                        ? "error-input-border shadow-inner  shadow-red-300"
                        : "input-border"
                    }`}
                    placeholder={`${
                      errors.password
                        ? "Please enter valid password"
                        : "Enter password"
                    }`}
                    {...register("password", {
                      required: true,
                    })}
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
