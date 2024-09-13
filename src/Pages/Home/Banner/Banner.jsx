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
    <div className=" pt-24 rounded-xl max-w-7xl mx-auto ">
      <Swiper
        pagination={true}
        autoplay={{
          delay: 1500,
          // disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper  h-fit rounded-xl"
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
  );
};

export default Banner;
