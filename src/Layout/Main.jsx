import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
// import { useEffect, useState } from "react";
import PageLoader from "../Pages/Shared/PageLoader/PageLoader";
import useCurrentUser from "../hooks/useCurrentUser";

const Main = () => {
  // const [loaderState, setLoaderState] = useState(true);
  const [current_user,isLoading] = useCurrentUser();
  console.log(isLoading)

  // useEffect(() => {
  //   const loaderTimer = setTimeout(() => {
  //     setLoaderState(false);
  //   }, 1000);

  //   return () => clearTimeout(loaderTimer);
  // }, []);

  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");
  const onlyHomePage = location.pathname.includes("/");

  return (
    <>
      {isLoading ? (
        <PageLoader></PageLoader>
      ) : (
        <div className="transition-opacity ease-in-out duration-1000">
          {/* {onlyHomePage && <Promotion></Promotion>} */}
          {noHeaderFooter || <NavBar></NavBar>}
          <Outlet></Outlet>
          {noHeaderFooter || <Footer></Footer>}
        </div>
      )}
    </>
  );
};

export default Main;
