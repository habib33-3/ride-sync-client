import { Typewriter } from "react-simple-typewriter";

const WriteBlog = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5 ">
      <h1 className="text-5xl text-center font-bold text-blue-800 my-5">
        Do you Write?
      </h1>
      <div className="lg:w-4/5 w-full mx-auto border-6 bg-sky-300 h-44 text-center flex flex-col items-center justify-center text-4xl font-bold text-blue-700 rounded-xl shadow-xl">
        <Typewriter
          words={["Write your travel experience and win exciting prizes"]}
          typeSpeed={40}
          loop={false}
        />
      </div>
    </div>
  );
};

export default WriteBlog;
