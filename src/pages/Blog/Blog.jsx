import { useParams } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs";
import Loading from "../../components/Loading/Loading";

const Blog = () => {
  const { id } = useParams();

  const { blogs, isLoading } = useBlogs();

  if (isLoading) {
    return <Loading />;
  }

  const blog = blogs.find((blog) => blog._id == id);

  return (
    <div>
      <h1 className="text-7xl font-bld text-purple-800 text-center my-10">
        {blog.title}
      </h1>
      <div className="w-full lg:w-3/5 mx-auto ">
        <p className="text-gray-700 text-lg font-semibold mb-10">{blog.time}</p>
        <p className="text-justify text-xl text-gray-800 p-4">{blog.text}</p>
      </div>
    </div>
  );
};

export default Blog;
