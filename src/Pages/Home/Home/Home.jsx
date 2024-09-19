import Banner from "../Banner/Banner";
import BecomeInstructor from "../BecomeInstructor/BecomeInstructor";
import Newsletter from "../Newsletter/Newsletter";
import OurPartners from "../OurPartners/OurPartners";
import PopularCourse from "../PopularCourse/PopularCourse";
import { Helmet } from "react-helmet-async";
import Testimonials from "../Testimonials/Testimonials";
import StatsSection from "../StatsSection/StatsSection";

const Home = () => {
  return (
    <div className="space-y-16 ">
      <Helmet>
        <title>EduBridge | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto space-y-16">
        <PopularCourse></PopularCourse>
        <OurPartners></OurPartners>
        <BecomeInstructor></BecomeInstructor>
        <Testimonials></Testimonials>
        <StatsSection></StatsSection>
      </div>
      <div className="bg-[#6538be]">
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;
