import { Rating } from "@smastrom/react-rating";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const {
    _id,
    skill_level,
    course_duration,
    lectures,
    Prerequisites,
    course_materials,
    course_learning,
    category,
    price,
    cover_image,
    about_this_course,
    course_title,
  } = course;

  // console.log(course?.lectures);
  return (
    <div className="h-[440px] p-4 overflow-hidden  shadow-inner shadow-gray-200 rounded-2xl flex flex-col justify-between group">
      <div className="flex flex-col h-full">
        {/* Top section (Author) */}
        <div className="flex items-center gap-2 mb-3 pl-4">
          <img
            className="rounded-full size-6 border border-indigo-400"
            src={cover_image}
            alt="author"
          />
          <p className="font-medium text-sm text-gray-800">Yet to be announced</p>
        </div>

        {/* Course image */}
        <img
          className="rounded-lg mb-2 w-full h-36 object-cover transition-transform duration-1000"
          src={cover_image}
          loading="lazy"
          alt="course"
        />

        {/* Course details */}
        <div className=" p-4 bg-white transition-transform duration-1000 group-hover:translate-y-[-60px]">
          <div className="badge mb-2 bg-[#EDF8F9] text-[#17A2B8] rounded-none py-2.5 text-xs px-2.5">
            {category}
          </div>
          <div className="flex mb-2 justify-start gap-x-3 text-xs font-semibold text-[#94928e]">
            <div className="flex gap-1 items-center"><IoBookOutline />{lectures} lessons</div>
            <div className="flex gap-1 items-center"><SlPeople />Skill Level: {skill_level}</div>
          </div>
          <h5 className="mb-2 text-lg roboto-mono-font font-bold text-gray-900">{course_title}</h5>
          <span className="font-medium text-gray-700">
            Duration: {course_duration}hr
          </span>

          <div className="border-t mt-2 py-2 flex justify-between items-center  transition-transform duration-900 transform translate-y-0 ">
            <div className="flex flex-col text-sm justify-start gap-0.5">
              <p><span className="font-semibold">{4.5}</span>/5</p>
              <Rating
                value={4.5}
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
        <div className=" px-4 -mb-2 flex justify-center items-center  transition-transform duration-500 transform  translate-y-full  group-hover:translate-y-[-60px] pb-4">
          <Link to={`/course/${_id}`} className="font-semibold w-3/5 text-center bg-[#8c52ff] px-4 py-2 text-white text-normal rounded-md">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
