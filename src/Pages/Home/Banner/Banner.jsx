import banner1 from "../../../assets/Banner/banner1.png";
import banner2 from "../../../assets/Banner/banner2.png";
import banner3 from "../../../assets/Banner/banner3.png";
import banner from "../../../assets/Banner/banner.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mb-28">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img className="w-full h-[600px] mx-auto" src={banner} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[600px] mx-auto" src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[600px] mx-auto" src={banner3} alt="" /></SwiperSlide>
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
