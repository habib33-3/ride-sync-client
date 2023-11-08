import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { Helmet } from "react-helmet-async";
import ManageServiceCard from "./components/ManageServiceCard/ManageServiceCard";
import { useEffect, useState } from "react";

const ManageService = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get(`/manageService/?email=${user.email}`).then((data) => {
      console.log(data.data);
      setServices(data.data);
    });
  }, [axios, user.email]);

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
              setServices={setServices}
              services={services}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageService;
