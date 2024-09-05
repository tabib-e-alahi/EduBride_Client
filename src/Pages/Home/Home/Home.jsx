import Banner from "../Banner/Banner";
import BecomeInstructor from "../BecomeInstructor/BecomeInstructor";
import Newsletter from "../Newsletter/Newsletter";
import OurPartners from "../OurPartners/OurPartners";
import PopularCourse from "../PopularCourse/PopularCourse";
import { Helmet } from 'react-helmet-async';
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
       <Helmet>
        <title>EduBridge | Home</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <Banner></Banner>
      <PopularCourse></PopularCourse>
      <OurPartners></OurPartners>
      <BecomeInstructor></BecomeInstructor>
      <Newsletter></Newsletter>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
