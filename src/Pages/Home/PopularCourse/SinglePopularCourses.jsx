import { Rating } from "@smastrom/react-rating";
import { FaLongArrowAltRight } from "react-icons/fa";
import "@smastrom/react-rating/style.css";

const SinglePopularCourses = ({ p }) => {
  const {
    title,
    author,
    description,
    lessons,
    image,
    enrolled_students,
    price,
    duration_hours,
    ratings,
  } = p;

  // const truncateWords = (text, limit) => {
  //   const words = text.split(' ');
  //   if (words.length > limit) {
  //     return words.slice(0, limit).join(' ') + '...';
  //   }
  //   return text;
  // };

  return (
    <div className="max-w-sm h-full p-4 border bg-white shadow-sm rounded-3xl font-sans  flex flex-col justify-between noto-sans-font">
      <div>
        <div className="flex gap-2 justify-start items-center mb-4 pl-6">
          <img
            className="rounded-full size-6 outline outline-indigo-400 "
            src={image}
            alt
          />
          <p className="font-medium font-serif">Yet to be announced</p>
        </div>
        <img
          className="rounded-lg mb-2 w-[353px] h-[200px]"
          src={image}
          alt
        />
        <div className=" flex-grow p-6  bg-white">
          <div className="badge mb-3 bg-[#EDF8F9] text-[#17A2B8] rounded-none py-3 text-xs px-1.5 ">
            {author}
          </div>
          <div className="flex justify-start  gap-x-5">
            <div className="text-sm font-semibold text-[#94928e]">
              {lessons}
            </div>
            <div className="text-sm font-semibold text-[#94928e]">
              {enrolled_students} enrolled
            </div>
          </div>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <span className="font-medium">
            Duration: {duration_hours}hr
          </span>
        </div>
        <div className="border-t px-2 w-11/12 mx-auto   py-2 flex justify-between items-center  rounded-b-xl">
          <button className="font-semibold text-indigo-700 ">
            See Details
          </button>
          <span className="font-bold text-indigo-600 text-xl">
            ${price > 0 ? '$'+ price : "Free"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SinglePopularCourses;
