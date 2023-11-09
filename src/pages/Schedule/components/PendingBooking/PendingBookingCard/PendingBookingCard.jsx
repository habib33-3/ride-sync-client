import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useAxios from "../../../../../hooks/useAxios";

const PendingBookingCard = ({ service }) => {
  const axios = useAxios();
  const [status, setStatus] = useState("pending");
  const {
    serviceName,
    serviceImg,
    date,
    instruction,
    servicePrice,
    userEmail,
    _id,
  } = service;

  useEffect(() => {
    if (service.status) {
      setStatus(service.status);
    } else {
      setStatus("pending");
    }
  }, [service.status]);

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);

    const booking = { status };

    axios.put(`/booking/setStatus/${_id}`, booking).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="w-full flex h-80 flex-col justify-center items-center lg:w-96 mx-auto bg-slate-100 px-3 py-2 shadow-md rounded-lg border overflow-y-scroll">
      <div>
        <img
          src={serviceImg}
          alt=""
          className="w-56 mx-auto h-44"
        />
      </div>
      <h1 className="text-xl font-bold text-center text-blue-600">
        {serviceName}
      </h1>
      <div className="text-left text-gray-700">
        <h3 className="text-lg font-medium">Price: {servicePrice}</h3>
        <h2 className="text-sm font-semibold">User: {userEmail}</h2>
        <h4 className="text-sm font-bold">Date: {date}</h4>
      </div>
      <div className="w-11/12 mx-auto border-2 p-4">
        Instruction:{" "}
        <p className="text-justify text-md text-gray-600 font-medium">
          {instruction}
        </p>
      </div>

      <div className="flex gap-2 items-center justify-center mt-4">
        <label htmlFor="status">Set Status</label>
        <select
          name="status"
          id=""
          value={status}
          onChange={handleChangeStatus}
        >
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

PendingBookingCard.propTypes = {
  service: PropTypes.object,
};

export default PendingBookingCard;
