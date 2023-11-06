import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import Skeleton from "react-loading-skeleton";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {
  const axios = useAxios();

  const getServices = async () => {
    const res = await axios.get("/services");
    
    return res;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  console.log(data);

  if (isError) {
    return <p className="text-3xl text-center">Something Went Wrong...</p>;
  }

  if (isLoading) {
    return <Skeleton count={5} />;
  }

  return (
    <div className="max-w-6xl mx-auto  mt-10 p-5">
      <h1 className="text-5xl font-bold mt-5 mb-8 text-gray-700 text-center">
        Top Services
      </h1>
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6">
        {data?.data.slice(0, 4).map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
          />
        ))}
      </div>
      <Link>
        <button className="mt-2 w-max mx-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center  mb-2 active:scale-95">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default Services;
