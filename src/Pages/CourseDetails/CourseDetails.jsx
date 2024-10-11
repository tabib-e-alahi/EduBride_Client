import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import AllCourseBanner from "../AllCourses/AllCourseBanner";
import "./CourseDetails.css";
import PageLoader from "../Shared/PageLoader/PageLoader";

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

  const {
    course_title,
    about_this_course,
    cover_image,
    price,
    category,
    course_learning,
    course_materials,
    Prerequisites,
    lectures,
    course_duration,
    skill_level,
    forWhome,
    course_instructors,
    course_posted_date,
  } = course;

  const pageTitle = (
    <>
      <h1 className="text-white font-bold text-center text-4xl xl:text-5xl">
        {category}
      </h1>
    </>
  );

  return (
    <>
      {isLoading ? (
        <PageLoader></PageLoader>
      ) : (
        <div className="max-w-7xl mx-auto">
          <div className="mt-24">
            <AllCourseBanner pageTitle={pageTitle}></AllCourseBanner>
          </div>
          <section className="grid grid-cols-3">
            <div className="col-span-2 space-y-10">
              <h1 className="text-4xl font-bold font-serif">{course_title}</h1>
              <p className="roboto-mono-font text-justify font-medium">
                {about_this_course}
              </p>
              <img
                className="rounded-tl-box rounded-br-xl"
                src={cover_image}
                alt="course cover image"
              />
              
            </div>
            <div className="1">
              <div className="card rounded-xl bg-base-100 w-96 ml-auto shadow-xl">
                <figure>
                  <img src={cover_image} alt="course cover image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{course_title}</h2>
                  <p></p>
                  <div className="card-actions justify-between">
                    <div className="text-[#4A6DB0] text-xl font-semibold">
                      ${price}
                    </div>
                    <button className="enroll_btn_class">Enroll</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default CourseDetails;
