import SocialLogin from "../SocialLogin/SocialLogin";
import login from "../../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import "./SignUp.css";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SignUp = () => {
  const [passShow, setPassShow] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data?.email, data?.password).then((result) => {
      const loggedUser = result.user;
      console.table(loggedUser);

      updateUserProfile(data?.name)
        .then(() => {
          console.log("User profile Updated");
          const userInfo = {
            email: data?.email,
            name: data?.name,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: `Welcomee to eduBridge '${data?.name.split(" ")[0]}'`,
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
              navigate("/");
            }
          });
        })
        .catch((errors) => {
          console.log(errors);
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>EduBridge | SignUp</title>
      </Helmet>
      <div className="h-screen flex items-center bg_custom">
        <div className="grid grid-cols-2 login_form_glass  max-w-6xl mx-auto h-5/6  shadow-lg rounded-sm shadow-slate-600">
          <div className="flex justify-center items-center ">
            <img className="w-2/3 mx-auto" src={login} alt="" />
          </div>
          <div className="noto-sans-font w-full  my-auto ">
            <h1 className="text-center  text-4xl font-bold mb-8 text-[#172734]">
              Sign up
            </h1>
            {/* social log in  */}

            <div className="rounded-sm">
              <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 mx-auto">
                <div className="flex flex-col space-y-8">
                  <div className="flex flex-col gap-1">
                    <input
                      type="text"
                      name="name"
                      className={`p-3 rounded-md form-input placeholder:text-gray-600 ${
                        errors.name
                          ? "error-input-border shadow-inner shadow-red-300"
                          : " input-border"
                      }`}
                      placeholder={`${
                        errors.name
                          ? "Please enter your full name"
                          : "Full name"
                      }`}
                      {...register("name", { required: true })}
                    />
                  </div>
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
                        errors.email
                          ? "Please enter valid email"
                          : "Enter email"
                      }`}
                      {...register("email", { required: true })}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center relative">
                      <input
                        type={`${passShow == true ? "text" : "password"}`}
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
                        } `}
                        {...register("password", {
                          required: true,
                          minLength: 6,
                        })}
                      />
                      {passShow == true ? (
                        <p
                          onClick={() => setPassShow(false)}
                          role="button"
                          className="text-xs font-bold hover:text-gray-600  absolute right-4"
                        >
                          HIDE
                        </p>
                      ) : (
                        <p
                          onClick={() => setPassShow(true)}
                          role="button"
                          className="text-xs font-bold hover:text-gray-600  absolute right-4"
                        >
                          SHOW
                        </p>
                      )}
                    </div>
                    {errors.password && (
                      <span className="text-sm text-red-600">
                        Password must be 6 character in length minimum
                      </span>
                    )}
                  </div>

                  <div className="w-2/3 mx-auto text-center">
                    <button className="flex-none rounded-sm bg-indigo-500 w-full  py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                      SignUp
                    </button>
                  </div>
                </div>
              </form>

              <div className="flex justify-center items-center gap-1">
                <p className="font-normal">Already have an account?</p>
                <Link to="/login">
                  <button className="btn btn-link pl-0">Login</button>
                </Link>
              </div>
            </div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
