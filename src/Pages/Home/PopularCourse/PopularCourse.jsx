import { useEffect, useState } from "react";
import SinglePopularCourses from "./SinglePopularCourses";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
    <div className="mb-14  w-11/12 mx-auto">
        <h1 className="font-bold text-4xl source-code-pro-class mb-8"><span className="text-blue-700">Popular</span> Course</h1>
      {
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {popularCourses.map((p, idx) => (
            <SwiperSlide>
              <SinglePopularCourses key={idx} p={p}></SinglePopularCourses>
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </div>
  );
};

export default PopularCourse;
