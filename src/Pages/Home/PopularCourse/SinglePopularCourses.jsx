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
    <div className="max-w-sm h-[380px] shadow-sm rounded-lg  flex flex-col justify-between noto-sans-font">
      <img className="rounded-t-xl" src={image} alt="" />
      <div className="bg-[#F9F9FA] py-3 px-2 text-sm font-semibold border-x border-gray-300 flex justify-between ">
        <span className="rounded-3xl ">Duration: {duration_hours}hr</span>
        <div className="flex gap-1">
          <Rating style={{ maxWidth: 90 }} value={ratings} readOnly />
          <span className="font-bold">({ratings})</span>
        </div>
      </div>
      <div className="p-5 flex-grow border-x border-gray-300 bg-white">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="text-sm">{author}</p>
      </div>
      <div className="bg-[#F9F9FA] py-2 flex justify-center border-x border-gray-300 border-b rounded-b-xl">
        <button className="flex-none rounded-sm bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          See Details <FaLongArrowAltRight className="inline-flex" />
        </button>
      </div>
    </div>
  );
};

export default SinglePopularCourses;
