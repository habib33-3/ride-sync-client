import { useState, useEffect } from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxios from "../../../../hooks/useAxios";
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
    <div className="mt-10 max-w-6xl mx-auto">
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
        <div className="text-center text-6xl font-bold text-gray-700 my-10 ">
          <h1>No booking pending!!!</h1>
        </div>
      )}
    </div>
  );
};

export default PendingBooking;
