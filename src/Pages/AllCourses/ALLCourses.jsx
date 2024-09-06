import { useEffect, useState } from "react";
import Course from "./Course";


const ALLCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
      fetch("./allCourses.json")
        .then((res) => res.json())
        .then((data) => setCourses(data));
    }, []);

    console.log(courses)


    return (
        <div>
            <h1 className="text-4xl font-bold my-16 text-center">This is All Courses</h1>
            {
                courses.map((course,idx) => <Course key={idx} course={course}></Course>)
            }
        </div>
    );
};

export default ALLCourses;