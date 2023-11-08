import PropTypes from "prop-types";

const ManageServiceCard = ({ service }) => {
  const { serviceName, serviceImg } = service;

  return (
    <div className="flex flex-col lg:flex-row  justify-between h-max mb-2 shadow-sm items-center lg:px-5 bg-sky-200 py-2 ">
      <div className="border-r border-2">
        <img
          src={serviceImg}
          alt=""
          className="w-52 h-44 rounded-lg"
        />
      </div>
      <div className="m-4 lg:m-0">
        <h1 className="text-4xl font-semibold text-center">{serviceName}</h1>
      </div>
      <div>
        <div className="flex justify-center items-center gap-6">
          <button className="bg-blue-600 px-4 py-2 text-white rounded-md font-bold active:scale-95">
            Update
          </button>
          <button className="bg-red-600 px-4 py-2 text-white rounded-md font-bold active:scale-95">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

ManageServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ManageServiceCard;
