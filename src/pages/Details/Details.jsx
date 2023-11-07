import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import ProviderInfo from "./components/ProviderInfo/ProviderInfo";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";

const Details = () => {
  const axios = useAxios();
  const { id } = useParams();
  console.log(id);

  const getService = async () => {
    const res = await axios.get(`/details/${id}`);
    return res;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["service"],
    queryFn: getService,
  });

  const service = data?.data;

  if (isLoading) {
    return <Skeleton count={5} />;
  }

  if (isError) {
    return <p className="text-3xl text-center">Something Went Wrong...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div>
        <ProviderInfo service={service} />
      </div>

      <div>
        <ServiceDetails service={service} />
      </div>
    </div>
  );
};

export default Details;
