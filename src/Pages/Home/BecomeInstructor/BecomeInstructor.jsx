import Become from "../../../assets/Become.png";

const BecomeInstructor = () => {
  return (
    <div className="my-10 mx-auto   flex gap-6 lg:gap-10 lg:flex-justify  lg:flex flex-col-reverse lg:flex-row-reverse lg:items-center">
      <div className="sm:text-center lg:text-left roboto-mono-font ">
        <h1 className="text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-800">
          Become an
          <span className="text-blue-600"> Instructor</span>
        </h1>
        <p className="mt-3  text-gray-500 sm:mt-5 text-sm sm:max-w-xl sm:mx-auto md:mt-5 md:text-[16px] lg:mx-0 text-justify">
          Empower others by sharing your expertise! Join our team of dedicated
          educators and inspire the next generation.{" "}
          <span className="hidden lg:flex">
            As an instructor, you'll have the opportunity to shape minds, foster
            growth, and make a meaningful impact.
          </span>{" "}
          Apply today to start your journey as an instructor!
        </p>
        {/* Button Section */}
        <button className="mt-6 w-2/3 lg:w-full flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
            Start teaching today
          </button>
     
      </div>
      {/*   Image Section     */}
      <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={Become}
          alt=""
        />
      </div>
      {/*   End of Image Section     */}
    </div>
  );
};

export default BecomeInstructor;
