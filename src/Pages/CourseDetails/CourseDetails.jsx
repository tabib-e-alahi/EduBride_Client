import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import AllCourseBanner from "../AllCourses/AllCourseBanner";

const CourseDetails = () => {
  const { id } = useParams();
  console.log(id);

  const axiosPublic = useAxiosPublic();
  const { data: course = {}, isLoading } = useQuery({
    queryKey: ["course"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/allcourses/${id}`);
      return res.data;
    },
  });

  console.log(course);
  const pageTitle = (
    <>
      <h1 className="text-white font-bold text-center text-4xl xl:text-5xl">
        {course?.course_title}
      </h1>
    </>
  );

  return (
    <div className="max-w-7xl mx-auto">
     <div className="mt-24">
     <AllCourseBanner pageTitle={pageTitle}></AllCourseBanner>
     </div>
      <h1 className="text-3xl text-center mt-16">{course?.course_title}</h1>
    </div>
  );
};

export default CourseDetails;
