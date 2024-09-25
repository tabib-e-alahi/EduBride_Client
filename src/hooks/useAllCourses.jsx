import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllCourses = () => {
  const axiosPublic = useAxiosPublic();
  const { data: courses = [],isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allcourses");
      return res.data;
    },
  });
  return [courses,isLoading];
};

export default useAllCourses;
