import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
// import Promotion from "../Pages/Home/Promotion/Promotion";
import rocket_loader from '../assets/rocket_loader.json'

const Main = () => {
  const [loaderState, setLoaderState] = useState(true);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setLoaderState(false);
    }, 1000);

    return () => clearTimeout(loaderTimer);
  }, []);

  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");
  const onlyHomePage = location.pathname.includes("/");

  return (
    <>
    {
      loaderState ? <Lottie className="h-screen w-64 mx-auto" animationData={rocket_loader}></Lottie>:
      <div className="transition-opacity ease-in-out duration-1000">
      {/* {onlyHomePage && <Promotion></Promotion>} */}
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
    }
    </>
  );
};

export default Main;
