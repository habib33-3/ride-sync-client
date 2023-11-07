import PropTypes from "prop-types";

const ProviderInfo = ({ service }) => {
  const { providerImg, providerName, serviceArea } = service;

  return (
    <div className="w-full lg:w-4/5 mx-auto bg-slate-50 py-5 rounded-lg shadow-xl">
      <h1 className="text-center my-3 text-5xl font-bold text-gray-800">
        Providers Info
      </h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          src={providerImg}
          className="rounded-full w-16 h-16 mx-auto"
          alt=""
        />
        <h1 className="text-gray-700 text-4xl font-bold">{providerName}</h1>
        <h3 className="text-gray-600 font-semibold text-3xl">
          Available in : {serviceArea}
        </h3>
      </div>
    </div>
  );
};

ProviderInfo.propTypes = {
  service: PropTypes.object,
};

export default ProviderInfo;
