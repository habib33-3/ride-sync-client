import PropTypes from "prop-types";

const UserBookingCard = ({ service }) => {
  const {
    serviceName,
    serviceImg,
    date,
    instruction,
    servicePrice,
    providerEmail,
  } = service;

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
        <h2 className="text-sm font-semibold">Provider: {providerEmail}</h2>
        <h4 className="text-sm font-bold">Date: {date}</h4>
      </div>
      <div className="w-11/12 mx-auto border-2 p-4">
        Instruction:{" "}
        <p className="text-justify text-md text-gray-600 font-medium">
          {instruction}
        </p>
      </div>
    </div>
  );
};

UserBookingCard.propTypes = {
  service: PropTypes.object,
};

export default UserBookingCard;
