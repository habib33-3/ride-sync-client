import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { Helmet } from "react-helmet-async";
import Skeleton from "react-loading-skeleton";
import ManageServiceCard from "./components/ManageServiceCard/ManageServiceCard";

const ManageService = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const getServices = async () => {
    const res = await axios.get(`/manageService/?email=${user.email}`);
    return res;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["servicesByUser"],
    queryFn: getServices,
  });

  //   console.log(data);


  if (isError) {
    return <p className="text-3xl text-center">Something Went Wrong...</p>;
  }

  if (isLoading) {
    return <Skeleton count={5} />;
  }
  const services = data?.data;
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <Helmet>
        <title>RideSync || {user.displayName}s Services</title>
      </Helmet>

      <div>
        <div>
          <h1 className="text-5xl text-blue-700 font-semibold text-center">
            Manage Services
          </h1>
        </div>
        <div className="space-y-5 mt-5">
          {services.map((service) => (
            <ManageServiceCard
              key={service._id}
              service={service}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageService;
