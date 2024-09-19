import { FcGoogle } from "react-icons/fc";
import facebook from "../../../assets/facebook.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result) =>{
      console.log(result.user);
      navigate(from, { replace: true });
    })
  };



  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="divider max-w-sm mx-auto  text-gray-500 text-sm font-medium">
        Or continue with
      </div>
      <div className="flex  justify-center items-center gap-6">
        <button onClick={handleGoogleSignIn} className="">
          <FcGoogle className="h-8 w-8 mr-2"></FcGoogle>
        </button>
        <button onClick={handleGoogleSignIn} className="">
          <img className="h-8 w-8 mr-2" src={facebook} alt="FB" />
          {/* <FcGoogle className="h-8 w-8 mr-2"></FcGoogle> */}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
