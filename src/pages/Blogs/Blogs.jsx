import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import useBlogs from "../../hooks/useBlogs";

const Blogs = () => {
  const { blogs, isLoading } = useBlogs();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-purple-800 font-bold my-10 text-5xl text-center">
        Blogs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-7 w-full lg:w-4/5 mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="w-96 rounded-md shadow-xl h-[500px] flex-col flex justify-center items-center gap-6 px-5 py-6 bg-sky-200"
          >
            <h3 className="text-center text-gray-800 font-semibold text-3xl">
              {blog.title}
            </h3>
            <h3 className="text-justify text-black font-semibold text-xl">
              {blog.text.slice(0, 200)}...
            </h3>

            <Link to={`/blog/${blog._id}`}>
              <button className="px-8 py-3 text-lg font-semibold rounded dark:bg-indigo-400 dark:text-gray-900">
                Read Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
