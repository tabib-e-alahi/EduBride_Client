import Become from '../../../assets/Become.png'

const BecomeInstructor = () => {
  return (
    <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-10 lg:flex-justify  lg:flex flex-col lg:flex-row-reverse lg:items-center">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-4xl">
            Become an 
              <span className="text-blue-600"> Instructor</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
            Empower others by sharing your expertise! Join our team of dedicated educators and inspire the next generation. As an instructor, you'll have the opportunity to shape minds, foster growth, and make a meaningful impact. Apply today to start your journey as an instructor!
            </p>
            {/* Button Section */}
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                >
                  Start teaching today
                </a>
              </div>
            </div>
            {/* End of Button Section */}
          </div>
          {/*   Image Section     */}
          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={Become}
              alt
            />
          </div>
          {/*   End of Image Section     */}
        </div>
      </section>
  );
};

export default BecomeInstructor;
