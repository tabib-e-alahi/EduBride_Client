import Banner from "../Banner/Banner";
import BecomeInstructor from "../BecomeInstructor/BecomeInstructor";
import Newsletter from "../Newsletter/Newsletter";
import OurPartners from "../OurPartners/OurPartners";
import PopularCourse from "../PopularCourse/PopularCourse";
import { Helmet } from 'react-helmet-async';
import Testimonials from "../Testimonials/Testimonials";
import StatsSection from "../StatsSection/StatsSection";


const Home = () => {
  return (
    <div className="space-y-16 ">
       <Helmet>
        <title>EduBridge | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularCourse></PopularCourse>
      <OurPartners></OurPartners>
      <BecomeInstructor></BecomeInstructor>
      <Newsletter></Newsletter>
      <Testimonials></Testimonials>
      <StatsSection></StatsSection>
    
    </div>
  );
};

export default Home;
