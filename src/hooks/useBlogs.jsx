import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useBlogs = () => {
  const axiosSecure = useAxios();

  const {
    data: blogs,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosSecure.get("/getBlogs");

      return res.data;
    },
  });

  return { blogs, isLoading, refetch };
};

export default useBlogs;
