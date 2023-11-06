import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const {
    serviceImg,
    serviceName,
    serviceDescription,
    providerName,
    providerImg,
    servicePrice,
  } = service;
  return (
    <div>
      <div className="group flex flex-col lg:flex-row max-w-6xl bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] p-5">
        <div className="w-96 h-full mx-auto flex flex-col justify-center items-center  rounded-t-xl">
          <img
            src={serviceImg}
            className=" w-80 h-72"
            alt=""
          />
          <div className="mx-3">
            <h2 className="text-gray-500 my-2 text-xl font-bold ">
              Providers Info
            </h2>
            <div className="flex items-center gap-5">
              <img
                src={providerImg}
                alt=""
                className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri"
              />
              <h4 className="text-gray-600 font-bold text-lg">
                {providerName}
              </h4>
            </div>
          </div>
        </div>
        <div className="w-3/4 mx-auto flex-col flex">
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-lg font-semibold  text-blue-600 dark:text-blue-500">
              Price: {servicePrice}$
            </span>
            <h3 className="text-2xl text-center font-semibold capitalize text-gray-800 dark:text-gray-300 dark:hover:text-white">
              {serviceName}
            </h3>
            <p className="mt-3 text-gray-500 text-justify">
              {serviceDescription}
            </p>
          </div>
          <button className="mt-2 w-max mx-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center  mb-2 active:scale-95">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
