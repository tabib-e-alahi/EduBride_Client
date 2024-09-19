import { useEffect, useState } from "react";
import SinglePopularCourses from "./SinglePopularCourses";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./PopularCourse.css";

// import required modules
import { Pagination } from "swiper/modules";

const PopularCourse = () => {
  const [popularCourses, setPopularCourse] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setPopularCourse(data));
  }, []);

  return (
    <div className="max-w-7xl lg:py-6 mx-auto  bg-white">
        <div className="w-11/12 mx-auto h-full">
        <p className="text-xl font-semibold ml-2">Our most</p>
        <h1 className="font-bold text-5xl roboto-mono-font mb-4 ml-1 text-center flex justify-start gap-4">
          <span className="text-indigo-600 flex flex-col gap-0 justify-center items-center">
            Popular
            <svg className="w-fit h-10 -mt-2" viewBox="0 0 450 150">
              <path
                d="M10 90 Q 250 10, 490 90"
                stroke="#FFC107"
                strokeWidth={15}
                fill="none"
              />
            </svg>
          </span>
          Courses
        </h1>
        <div className=" ">
          {
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper mySwiper_custom "
            >
              {popularCourses.map((p, idx) => (
                <SwiperSlide key={idx}>
                  <SinglePopularCourses key={idx} p={p}></SinglePopularCourses>
                </SwiperSlide>
              ))}
            </Swiper>
          }
        </div>
      </div>
    </div>
  );
};

export default PopularCourse;
