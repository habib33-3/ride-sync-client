import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const WriteNow = () => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const axiosSecure = useAxios();
  const navigate = useNavigate();

  const handlePostBlog = (e) => {
    e.preventDefault();

    const blog = {
      title,
      text,
      author: user.displayName,
      time: new Date().toLocaleDateString("en-UK"),
    };

    axiosSecure.post("/postBlogs", blog).then((res) => {
      console.log(res.data);

      if (res.data.insertedId) {
        toast.success("Blog posted");
        e.target.reset();
        navigate("/blogs");
      }
    });
  };

  return (
    <div className="w-full lg:w-1/3 mx-auto bg-gray-100 p-2 mt-5 shadow-xl rounded-lg">
      <h1 className="text-center text-5xl font-bold text-purple-900 my-10 space-y-10">
        Write Your Blog
      </h1>
      <form
        action=""
        onSubmit={handlePostBlog}
      >
        <div className="w-full flex flex-col items-center justify-center">
          <label className="text-xl text-gray-700 my-1">Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="w-full py-2 pl-10 text-sm rounded-md  bg-blue-100 focus:outline-none  text-black"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-6">
          <label className="text-xl text-gray-700 my-1">Blog Text</label>
          <textarea
            onChange={(e) => setText(e.target.value)}
            className="w-full py-2 pl-10 text-sm rounded-md  bg-blue-100 focus:outline-none  text-black"
          />
        </div>
        <button
          type="submit"
          className="mt-10 inline-flex w-full items-center justify-center  rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 active:transition-transform active:scale-90"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default WriteNow;
