import { useEffect, useState } from "react";
import Course from "./Course";

const ALLCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./allCourses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const uniqueCategories = [
    ...new Set(courses.map((course) => course.category)),
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold my-16 text-center">
        This is All Courses
      </h1>
      {courses.map((course, idx) => (
        <Course key={idx} course={course}></Course>
      ))}
      {uniqueCategories.map((uniCat, idx) => (
        <div className="flex justify-center items-center text-left ml-10 mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            defaultValue
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium text-gray-900"
          >
            {uniCat}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ALLCourses;
