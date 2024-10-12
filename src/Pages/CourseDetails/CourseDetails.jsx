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
          <section className="grid grid-cols-3 gap-x-10">
            <div className="col-span-2 space-y-10">
              <h1 className="text-4xl font-bold font-serif">{course_title}</h1>
              <p className="noto-sans-font text-justify line_class">
                {about_this_course}
              </p>
              <img
                className="rounded-tl-box rounded-br-xl"
                src={cover_image}
                alt="course cover image"
              />
              <div>
                <div className="card h-full ">
                  <h1 className="text-3xl font-bold mb-8 noto-sans-font">Course Materials</h1>
                  <div className="card-body rounded-lg border border-[#4A6DB0]">
                    <ul className="noto-sans-font list_line_class grid grid-cols-2 gap-2 justify-between items-center text-left text-gray-500 dark:text-gray-700">
                      {course_materials?.map((material) => (
                        <li className="flex items-center space-x-2 rtl:space-x-reverse">
                          <svg
                            className="flex-shrink-0 size-5 p-[3px] text-green-500 bg-[#4A6DB0] rounded-full dark:text-green-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 12"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 5.917 5.724 10.5 15 1.5"
                            />
                          </svg>
                          <span className="font-medium">{material}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="card h-full my-20">
                  <h1 className="text-3xl font-bold mb-8 noto-sans-font">What you will learn from this course?</h1>
                  <div className="card-body rounded-lg border border-[#4A6DB0]">
                    <ul className="noto-sans-font list_line_class grid grid-cols-2 gap-2 justify-between items-center text-left text-gray-500 dark:text-gray-700">
                      {course_learning?.map((learning) => (
                        <li className="flex items-center space-x-2 rtl:space-x-reverse">
                          <svg
                            className="flex-shrink-0 size-5 p-[3px] text-green-500 bg-[#4A6DB0] rounded-full dark:text-green-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 12"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 5.917 5.724 10.5 15 1.5"
                            />
                          </svg>
                          <span className="font-medium">{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="card h-full ">
                  <h1 className="text-3xl font-bold mb-8 noto-sans-font">Who the course is for</h1>
                  <div className="card-body rounded-lg border border-[#4A6DB0]">
                    <ul className="noto-sans-font  grid grid-cols-2 gap-4 justify-between items-center text-left text-gray-500 dark:text-gray-700">
                      {forWhome?.map((whome) => (
                        <li className="flex items-center space-x-2 rtl:space-x-reverse">
                          <svg
                            className="flex-shrink-0 size-5 p-[3px] text-green-500 bg-[#4A6DB0] rounded-full dark:text-green-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 12"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 5.917 5.724 10.5 15 1.5"
                            />
                          </svg>
                          <span className="font-medium">{whome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-fit relative">
              <div className="card sticky z-10 h-full rounded-lg border border-[#4A6DB0]">
                <div className="card-body ">
                  <h1 className="text-xl font-bold mb-4">
                    What you will learn from this course?
                  </h1>

                  <ul className="grid grid-cols-2 gap-y-4 gap-x-4 text-left text-gray-500 roboto-mono-font dark:text-gray-700">
                    {forWhome?.map((learning) => (
                      <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg
                          className="flex-shrink-0 w-3.5 h-3.5 p-0.5 rounded-full bg-[#4A6DB0] text-green-500 dark:text-green-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 16 12"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 5.917 5.724 10.5 15 1.5"
                          />
                        </svg>
                        <span className="text-[13px]">{learning}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-300 h-[1px] w-full my-4"></div>
                  <div className="card-actions flex-col">
                    <div className="text-[#4A6DB0] flex items-center justify-between w-full mb-4">
                      <p className="w-full font-medium text-lg">
                        Course Price:
                      </p>
                      <p className="font-bold text-2xl">${price}</p>
                    </div>
                    <button className="enroll_btn_class">Enroll Now</button>
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
