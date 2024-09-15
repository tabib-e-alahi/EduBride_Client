import { Link } from 'react-router-dom';
import banner_image from '../../../assets/banner_image.png'
import 'animate.css';

const Banner1 = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <section className=" lg:h-fit rounded-md w-11/12 mx-auto">
        <div className="grid  py-8 lg:grid-cols-2 lg:pt-4">
          <div className="mr-auto place-self-center justify-center  w-11/12 ">
            <h1 className="animate__animated animate__lightSpeedInLeft max-w-2xl mb-4 roboto-mono-font font-bold leading-none tracking-tight md:text-5xl line_class  dark:text-black">
              Experience <br/>Personalized<br />
              learning with our <br />
              private course.
            </h1>
            <p className="max-w-2xl mb-6 font-semibold  text-gray-500 lg:mb-8  dark:text-gray-600">
            Discover tailored education with our private course, offering a personalized learning experience that caters to your unique needs and goals.
              .
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex bg-white font-bold text-[#26507F] items-center justify-center w-full px-5 py-3 text-sm  text-center hover:text-gray-100 hover:bg-[#ED9A15] rounded-lg sm:w-auto"
              >
                
                View Courses
              </Link>
             
            </div>
          </div>
          <div className="hidden lg:mt-0  lg:flex justify-end">
            <img
            className='h-full w-full'
              src={banner_image}
              alt="hero image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner1;
