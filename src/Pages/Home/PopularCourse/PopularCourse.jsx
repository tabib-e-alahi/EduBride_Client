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
    <div className="  ">
      <div className=" max-w-7xl lg:p-8 mx-auto bg-white rounded-xl">
        <h1 className="font-bold text-5xl font-sans mb-8 text-center">
          <span className="text-indigo-600 ">Popular</span> Courses
        </h1>
        {
          <Swiper
            slidesPerView={4}
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
  );
};

export default PopularCourse;
