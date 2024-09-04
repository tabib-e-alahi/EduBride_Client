import Banner from "../Banner/Banner";
import BecomeInstructor from "../BecomeInstructor/BecomeInstructor";
import Newsletter from "../Newsletter/Newsletter";
import OurPartners from "../OurPartners/OurPartners";
import PopularCourse from "../PopularCourse/PopularCourse";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularCourse></PopularCourse>
      <OurPartners></OurPartners>
      <BecomeInstructor></BecomeInstructor>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
