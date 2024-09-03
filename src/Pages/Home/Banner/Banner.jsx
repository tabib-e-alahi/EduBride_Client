
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";

const Banner = () => {
  return (
    <div className="mb-28">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><Banner1></Banner1></SwiperSlide>
        <SwiperSlide><Banner2></Banner2></SwiperSlide>
        {/* <SwiperSlide><img className=" mx-auto" src={banner3} alt="" /></SwiperSlide>
        <SwiperSlide><img className=" mx-auto" src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img className=" mx-auto" src={banner3} alt="" /></SwiperSlide>
        <SwiperSlide><img className=" mx-auto" src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img className=" mx-auto" src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img className=" mx-auto" src={banner3} alt="" /></SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;
