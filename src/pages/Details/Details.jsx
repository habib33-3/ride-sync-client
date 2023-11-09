import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import ProviderInfo from "./components/ProviderInfo/ProviderInfo";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import useAuth from "../../hooks/useAuth";
import OtherServices from "./components/OtherServices/OtherServices";
import Loading from "../../components/Loading/Loading";

const Details = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const { id } = useParams();

  const getService = async () => {
    const res = await axios.get(`/details/${id}?email=${user.email}`);
    return res;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["service"],
    queryFn: getService,
  });

  if (isLoading) {
    return <Loading/>;
  }

  if (isError) {
    return <p className="text-3xl text-center">Something Went Wrong...</p>;
  }

  const service = data?.data;
  console.log(service.providerEmail, "email");

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div>
        <ProviderInfo service={service} />
      </div>

      <div>
        <ServiceDetails service={service} />
      </div>

      <OtherServices
        id={id}
        provider={service?.providerEmail}
      />
    </div>
  );
};

export default Details;
