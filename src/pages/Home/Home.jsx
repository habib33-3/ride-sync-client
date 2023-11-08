import Banner from "./Banner/Banner";
import Newsletter from "./Newsletter/Newsletter";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import WriteBlog from "./WriteBlog/WriteBlog";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <WriteBlog />
      <Testimonial />
      <Newsletter/>
    </div>
  );
};

export default Home;
