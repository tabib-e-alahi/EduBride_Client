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
      <section className="grid grid-cols-4">
        <div className="col-span-2 space-y-10">
          <img
            className="rounded-tl-box rounded-br-xl"
            src={course?.cover_image}
            alt=""
          />
          <p>{course?.about_this_course}</p>
        </div>
        <div className="col-span-2">
          <div className="card rounded-xl bg-base-100 w-96 ml-auto shadow-xl">
            <figure>
              <img
                src={course?.cover_image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
