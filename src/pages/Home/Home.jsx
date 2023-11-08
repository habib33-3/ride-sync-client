import Banner from "./Banner/Banner";
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
    </div>
  );
};

export default Home;
