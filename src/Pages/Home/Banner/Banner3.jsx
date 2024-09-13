import { Link } from 'react-router-dom';
import b_img_1 from '../../../assets/Banner/b_img_1.png'

const Banner3 = () => {
    return (
      <div>
      <section className="bg-white dark:bg-[#26507F] lg:h-fit rounded-xl">
        <div className="grid w-11/12 mx-auto  py-8 lg:gap-8 xl:gap-0 lg:pb-0 lg:grid-cols-12 lg:pt-4">
          <div className="mr-auto place-self-center justify-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-serif font-bold leading-none tracking-tight md:text-5xl dark:text-white">
              Experience Personalized<br />
              learning with our <br />
              private course.
            </h1>
            <p className="max-w-2xl mb-6  text-gray-500 lg:mb-8  dark:text-gray-200">
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
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-end">
            <img
            className='h-[400px]'
              src={b_img_1}
              alt="hero image"
            />
          </div>
        </div>
      </section>
    </div>
    );
};

export default Banner3;