import { useState, useEffect } from "react";
import useAxios from "../../../../hooks/useAxios";
import UserBookingCard from "./UserBookingCard/UserBookingCard";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";

const UsersBooking = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  console.log(user.email);

  useEffect(() => {
    axios.get(`/user/bookings?email=${user?.email}`).then((data) => {
      console.log(data.data);
      setServices(data.data);
    });
  }, [axios, user?.email]);

  return (
    <div className="mt-5 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 text-center my-5">
        My Bookings
      </h1>
      {services.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-6">
          {services.map((service) => (
            <UserBookingCard
              key={service._id}
              service={service}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center my-10">
          <h1>You Have No bookings</h1>
          <Link to="/services">
            <button className="bg-blue-600 px-3 py-2 w-max active:scale-95 rounded-md shadow-lg">
              Book Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UsersBooking;
