import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const CourseDetails = () => {
  const { id } = useParams();
  console.log(id);

  const axiosPublic = useAxiosPublic();
  const { data: course = {},isLoading } = useQuery({
    queryKey: ["course"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/allcourses/${id}`);
      return res.data;
    },
  });

  console.log(course)

  return <div>
    <h1 className="text-3xl text-center mt-16">{course?.course_title}</h1>
  </div>;
};

export default CourseDetails;
