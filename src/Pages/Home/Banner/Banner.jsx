// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
import './Banner.css'

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination, Autoplay } from "swiper/modules";
import Banner1 from "./Banner1";
// import Banner2 from "./Banner2";
// import Banner3 from "./Banner3";

const Banner = () => {
  return (
    <div className="pt-20 h-fit bg-opacity-40  gradient-background banner-bg-img">
      <Banner1></Banner1>
      {/* <div className="max-w-7xl mx-auto ">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.3" d="M0,192L34.3,202.7C68.6,213,137,235,206,245.3C274.3,256,343,256,411,250.7C480,245,549,235,617,240C685.7,245,754,267,823,272C891.4,277,960,267,1029,224C1097.1,181,1166,107,1234,117.3C1302.9,128,1371,224,1406,272L1440,320L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    </div> */}
    
    </div>
  );
};

export default Banner;
