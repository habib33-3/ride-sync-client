import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const WriteBlog = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5 ">
      <h1 className="text-5xl text-center font-bold text-blue-800 my-5">
        Do you Write?
      </h1>
      <div className="relative z-10 lg:w-4/5 w-full mx-auto border-6 grad h-44 text-center flex flex-col items-center justify-center text-4xl font-bold rounded-xl shadow-xl bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 via-white  to-zinc-500">
          <Typewriter
            words={["Write your travel experience and win exciting prizes"]}
            typeSpeed={40}
            loop={false}
          />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Link to="/writeNow">
          <button className="px-8 py-3 mt-4 font-semibold bg-purple-700 text-white rounded-full dark:bg-gray-100 dark:text-gray-800">
            Write Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WriteBlog;
