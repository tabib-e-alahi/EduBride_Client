import { Link } from "react-router-dom";
import banner_image from "../../../assets/banner_image.png";
// import banner_bg from '../../../assets/banner_bg.png'
import "animate.css";

const Banner1 = () => {
  return (
    <div className="w-11/12 lg:max-w-7xl mx-auto ">
      <section className=" lg:h-fit rounded-md  mx-auto">
        <div className="grid  py-8 grid-cols-1 gap-y-16 lg:gap-y-0 lg:grid-cols-2 pt-16 lg:pt-4 ">
          <div className="mr-auto place-self-center justify-center  lg:w-11/12 ">
            <h1 className="animate__animated animate__fadeInLeft animate__slow max-w-2xl mb-4 roboto-mono-font font-bold leading-none tracking-tight text-4xl md:text-5xl line_class  dark:text-black">
              Experience <br />
              Personalized
              <br />
              learning with our <br />
              private courses.
            </h1>
            <p className="animate__animated animate__fadeInRight animate__slow max-w-2xl mt-6 mb-10 font-semibold  text- lg:text-gray-500 lg:mb-8  dark:text-gray-600">
              Discover tailored education with our private course, offering a
              personalized learning experience that caters to your unique needs
              and goals. .
            </p>
            <div className="animate__animated  animate__fadeInUp animate__slower">
              <Link className="flex-none rounded-sm bg-[#8c52ff] py-2.5 px-8 lg:px-10 lg:py-4  font-semibold text-white shadow-sm hover:bg-[#a378f8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8c52ff]">
                View Courses
              </Link>
            </div>
          </div>
          <div className=" order-first lg:order-last lg:mt-0   justify-end animate__animated animate__fadeInRight animate__slow">
            <img
              className="h-full w-full"
              src={banner_image}
              loading="lazy"
              alt="hero image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner1;
