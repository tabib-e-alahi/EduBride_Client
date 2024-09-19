import { Rating } from "@smastrom/react-rating";
import { FaLongArrowAltRight } from "react-icons/fa";

const Course = ({ course }) => {
  const {
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
    <div className="max-w-sm h-[380px] shadow-sm rounded-lg  flex flex-col justify-between noto-sans-font">
      <img className="rounded-t-xl h-40" src={cover_image} alt="" />
      <div className="bg-[#F9F9FA] py-3 px-2 text-sm font-semibold border-x border-gray-300 flex justify-between ">
        <span className="rounded-3xl ">Duration: {course_duration}hr</span>
        <div className="flex gap-1">
          <Rating style={{ maxWidth: 90 }} value={4.5} readOnly />
          <span className="font-bold">(47)</span>
        </div>
      </div>
      <div className="p-5 flex-grow border-x border-gray-300">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 overflow-ellipsis line-clamp-2 overflow-hidden">
          {course_title}
        </h5>
        <p className="text-sm">Tabib E Alahi</p>
      </div>
      <div className="bg-[#F9F9FA] py-2 flex justify-center border-x border-gray-300 border-b rounded-b-xl">
        <button className="flex-none rounded-sm bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          See Details <FaLongArrowAltRight className="inline-flex" />
        </button>
      </div>
    </div>
  );
};

export default Course;
