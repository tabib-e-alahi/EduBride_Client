import { useState } from "react";
import RouterLocation from "../Shared/RouterLocation/RouterLocation";
import { useLocation } from "react-router-dom";
import Course from "./Course";
import useAllCourses from "../../hooks/useAllCourses";
import PageLoader from "../Shared/PageLoader/PageLoader";
import AllCourseBanner from "./AllCourseBanner";

const ALLCourses = () => {
  const [checkedCategories, setCheckedCategories] = useState([]);
  const location = useLocation();
  
  const [courses, isLoading] = useAllCourses(); // retrieving all courses with useAllCourses hook
  console.log(isLoading);

  const uniqueCategories = [
    ...new Set(courses.map((course) => course.category)),
  ];

  const handleCheckboxChange = (uniCat) => {
    setCheckedCategories((prev) =>
      prev.includes(uniCat)
        ? prev.filter((cat) => cat !== uniCat)
        : [...prev, uniCat]
    );
  };

  console.log(checkedCategories);

  const filteredCourses = checkedCategories.length
    ? courses.filter((course) => checkedCategories.includes(course.category))
    : courses;

  return (
    <div className=" w-10/12 lg:py-24  lg:max-w-7xl mx-auto ">
      <RouterLocation routeInfo={location?.pathname}></RouterLocation>
      <AllCourseBanner></AllCourseBanner>
      <h1 className="text-4xl font-bold  text-center">This is All Courses</h1>

      {isLoading ? (
        <PageLoader></PageLoader>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4  lg:mt-10 gap-y-10 lg:gap-y-0 lg:gap-8">
          {/* =========== category section ======================= */}
          <section className="max-w-full shadow-sm h-fit p-8 pt-10 bg-[#F9F9FB] rounded-xl flex flex-col items-start justify-center">
            <h1 className="text-2xl font-semibold mb-6">Categories:</h1>
            {uniqueCategories.map((uniCat, idx) => (
              <div
                key={idx}
                className="flex justify-center items-center text-left   mb-4"
              >
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue
                  onChange={() => handleCheckboxChange(uniCat)}
                  className="size-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-3 text-lg  font-light text-black"
                >
                  {uniCat}
                </label>
              </div>
            ))}
          </section>
          {/* =============courses seection============  */}
          <section className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-y-8 lg:gap-5">
            {filteredCourses?.map((course, idx) => (
              <Course key={idx} course={course}></Course>
            ))}
          </section>
        </div>
      )}
    </div>
  );
};

export default ALLCourses;
