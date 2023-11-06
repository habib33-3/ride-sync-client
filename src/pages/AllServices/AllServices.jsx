import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const AllServices = () => {
  const loadedService = useLoaderData();
  const [services, setServices] = useState(loadedService?.data);
  const [searchValue, setSearchValue] = useState("");
  // console.log(services?.data)

  const handleSearch = (e) => {
    e.preventDefault();

    const filteredCard = services.filter(
      (item) => item.serviceName.toLowerCase() == searchValue.toLowerCase()
    );
    console.log(filteredCard);
    setServices(filteredCard);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <div className=" px-4 py-10 sm:px-6 lg:px-8 lg:py-16 ">
          <div className="grid  gap-8">
            <form onSubmit={handleSearch}>
              <div className="w-full mx-auto max-w-lg ">
                <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                  <div className="w-full">
                    <label
                      htmlFor="hero-input"
                      className="sr-only"
                    >
                      Search
                    </label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md hover:border-blue-500 active:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 active:scale-95"
                      placeholder="Search Here"
                      onBlur={(e) => setSearchValue(e.target.value)}
                    />
                  </div>
                  <button
                    className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center mx-auto gap-6 w-11/12">
        {services?.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
          />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
