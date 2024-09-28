import { Rating } from "@smastrom/react-rating";
import { FaLongArrowAltRight } from "react-icons/fa";
import "@smastrom/react-rating/style.css";
import { IoBookOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";

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
    <div className="max-w-sm h-full p-4 overflow-hidden border bg-white shadow-sm rounded-3xl font-sans flex flex-col justify-between group">
      <div className="flex flex-col h-full">
        {/* Top section (Author) */}
        <div className="flex items-center gap-2 mb-4 pl-6">
          <img
            className="rounded-full size-8 border border-indigo-400"
            src={image}
            loading="lazy"
            alt="author"
          />
          <p className="font-medium text-gray-800">Yet to be announced</p>
        </div>

        {/* Course image */}
        <img
          className="rounded-lg mb-2 w-full h-48 object-cover transition-transform duration-700"
          src={image}
          loading="lazy"
          alt="course"
        />

        {/* Course details */}
        <div className=" p-4 bg-white transition-transform duration-700 group-hover:translate-y-[-60px]">
          <div className="badge mb-3 bg-[#EDF8F9] text-[#17A2B8] rounded-none py-2.5 text-xs px-2.5">
            {author}
          </div>
          <div className="flex justify-start gap-x-5 text-[13px] font-semibold text-[#94928e]">
            <div className="flex gap-1 items-center"><IoBookOutline />{lessons} lessons</div>
            <div className="flex gap-1 items-center"><SlPeople />{enrolled_students} enrolled</div>
          </div>
          <h5 className="mb-2 text-xl font-bold text-gray-900">{title}</h5>
          <span className="font-medium text-gray-700">
            Duration: {duration_hours}hr
          </span>

          <div className="border-t  py-4 flex justify-between items-center  transition-transform duration-700 transform translate-y-10 ">
            <div className="flex flex-col text-sm justify-start gap-0.5">
              <p><span className="font-semibold">{ratings}</span>/5</p>
              <Rating
                value={ratings}
                style={{ maxWidth: 90 }}
                readOnly
              ></Rating>
            </div>
            <span className="font-bold text-indigo-600 text-xl">
              {price > 0 ? "$" + price : "Free"}
            </span>
          </div>
        </div>

        {/* Button and price (Initially hidden, appears on hover) */}
        <div className=" px-4 -mb-8 flex justify-center items-center  transition-transform duration-700 transform  translate-y-full  group-hover:translate-y-[-20px] pb-4">
          <button className="font-semibold w-3/5 bg-[#8c52ff] px-8 py-2 text-white text-normal rounded-md">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePopularCourses;
