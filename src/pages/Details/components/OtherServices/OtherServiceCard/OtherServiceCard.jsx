import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const OtherServiceCard = ({ service }) => {
  const { serviceImg, serviceName, _id } = service;

  return (
    <div>
      <Link to={`/serviceDetails/${_id}`}>
        <div className="bg-sky-100 w-full lg:w-72 mx-auto p-5 flex flex-col justify-center items-center gap-6 rounded-md shadow-xl active:scale-105 cursor-pointer hover:opacity-60">
          <img
            src={serviceImg}
            alt=""
            className="w-64 h-56 mx-auto rounded-lg"
          />
          <h1 className="text-3xl font-bold text-gray-700 text-center">
            {serviceName}
          </h1>
        </div>
      </Link>
    </div>
  );
};

OtherServiceCard.propTypes = {
  service: PropTypes.object,
};

export default OtherServiceCard;
