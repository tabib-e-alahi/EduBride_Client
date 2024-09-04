import { Link } from "react-router-dom";
import b_img_2 from "../../../assets/Banner/b_img_2.png";

const Banner2 = () => {
  return (
    <div>
      <section className="bg-white dark:bg-[#DAE4F7] source-code-pro-class lg:h-fit">
        <div className="grid  max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:pb-0 lg:grid-cols-12 lg:pt-10">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-serif font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-slate-800">
              Say Goodbye to
              <br />
              Heavy Books: <br />
              Find What You Need with Our Notes
            </h1>

            <p className="max-w-2xl mb-6  text-gray-500 lg:mb-8  dark:text-gray-800">
              Streamline your study process with our focused notes, designed to
              help you quickly locate key information and make learning more
              efficient. .
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Link className="inline-flex bg-white font-bold text-[#26507F] items-center justify-center w-full px-5 py-3 text-sm  text-center hover:text-gray-100 hover:bg-[#ED9A15] rounded-lg sm:w-auto">
                View Courses
              </Link>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex  justify-center">
            <img className="lg:h-[612px]" src={b_img_2} alt="hero image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner2;