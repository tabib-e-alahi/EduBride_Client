// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";

const Banner = () => {
  return (
    <div className="bg-[#FAF9FE] pb-10 pt-24">
      <div className="max-w-7xl mx-auto ">
      <Swiper
        pagination={true}
        autoplay={{
          delay: 1500,
          // disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper  h-fit rounded-md"
      >
        <SwiperSlide>
          <Banner1></Banner1>
        </SwiperSlide>
        <SwiperSlide>
          <Banner2></Banner2>
        </SwiperSlide>
        <SwiperSlide>
          <Banner3></Banner3>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
};

export default Banner;
