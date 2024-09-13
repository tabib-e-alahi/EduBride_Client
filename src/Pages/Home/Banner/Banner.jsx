// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";

const Banner = () => {
  return (
    <div className="mb-28 pt-20 rounded-xl max-w-7xl mx-auto ">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper  h-fit">
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
