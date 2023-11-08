import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import OtherServiceCard from "./OtherServiceCard/OtherServiceCard";

const OtherServices = ({ id, provider }) => {
  const [services, setServices] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    axios.get(`otherServices?provider=${provider}`).then((data) => {
      console.log(data);
      const loadedData = data.data;

      const remaining = loadedData.filter((item) => item._id !== id);
      setServices(remaining);
    });
  }, [axios, id, provider]);

  return (
    <div className="mt-10">
      <h1 className="text-5xl font-bold text-blue-600 my-5 text-center">
        Check Also
      </h1>
      <div className="grid grid-cold-1 lg:grid-cols-3 justify-center items-center gap-6 space-y-5">
        {services.map((service) => (
          <OtherServiceCard
            key={service._id}
            service={service}
          />
        ))}
      </div>
    </div>
  );
};

OtherServices.propTypes = {
  id: PropTypes.string,
  provider: PropTypes.string,
};

export default OtherServices;
