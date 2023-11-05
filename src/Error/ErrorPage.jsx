import { Link } from "react-router-dom";
import errorImg from "../assets/error.jpg";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const ErrorPage = () => {
  return (
    <div className=" ">
      <Navbar />
      <div className="max-w-6xl my-2 mx-auto flex flex-col items-center justify-center ">
        <img
          src={errorImg}
          alt="404"
          className=" mx-auto h-[600px]"
        />
        <Link to="/">
          <button
            type="button"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          >
            Go Back
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default ErrorPage;
