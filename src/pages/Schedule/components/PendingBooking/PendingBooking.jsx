import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxios from "../../../../hooks/useAxios";
import { useEffect } from "react";
import PendingBookingCard from "./PendingBookingCard/PendingBookingCard";

const PendingBooking = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get(`provider/bookings?email=${user.email}`).then((data) => {
      console.log(data.data);
      setServices(data.data);
    });
  }, [axios, user.email]);

  return (
    <div className="mt-5 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 text-center my-5">
        My Bookings
      </h1>
      {services.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-6">
          {services.map((service) => (
            <PendingBookingCard
              key={service._id}
              service={service}
            />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PendingBooking;
