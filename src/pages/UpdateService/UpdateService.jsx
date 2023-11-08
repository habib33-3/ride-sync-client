import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const UpdateService = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [service, setService] = useState({});

  const { id } = useParams();

  const [updatedServiceImg, setUpdatedServiceImg] = useState("");
  const [updatedServiceName, setUpdatedServiceName] = useState("");
  const [updatedServicePrice, setUpdatedServicePrice] = useState("");
  const [updatedServiceDescription, setUpdatedServiceDescription] =
    useState("");
  const [updatedServiceArea, setUpdatedServiceArea] = useState("");

  useEffect(() => {
    axios
      .get(`/details/${id}?email=${user.email}`)
      .then((data) => setService(data.data));
  }, [axios, id, user.email]);

  const {
    serviceImg,
    serviceName,
    servicePrice,
    serviceDescription,
    serviceArea,
  } = service;

  const handleUpdateService = (e) => {
    e.preventDefault();

    const updatedService = {
      updatedServiceImg,
      updatedServiceName,
      updatedServicePrice,
      updatedServiceDescription,
      updatedServiceArea,
    };

    axios.put(`/updateService/${id}`, updatedService).then((data) => {
      console.log(data);
      if (data.data.modifiedCount) {
        toast.success("Service Updated Successfully");
      }
    });
  };

  return (
    <div className="my-10">
      <Helmet>
        <title>RideSync|| Update Service</title>
      </Helmet>

      <h1 className="text-5xl text-center font-bold ">Add Your Service</h1>
      <form
        onSubmit={handleUpdateService}
        className="w-full md:w-1/3 mx-auto mt-5 p-6 bg-slate-100 rounded-md space-y-6"
      >
        <div className="">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="serviceImg"
          >
            Service Image
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Enter service image URL"
            id="serviceImg"
            defaultValue={serviceImg}
            onBlur={(e) => setUpdatedServiceImg(e.target.value)}
            required
          ></input>
        </div>
        <div className="">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="serviceName"
          >
            Service Name
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Enter service Name"
            id="serviceName"
            defaultValue={serviceName}
            onBlur={(e) => setUpdatedServiceName(e.target.value)}
          ></input>
        </div>

        <div className="">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="servicePrice"
          >
            Service Price
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="number"
            id="servicePrice"
            placeholder="Enter Service Price"
            defaultValue={servicePrice}
            onBlur={(e) => setUpdatedServicePrice(e.target.value)}
          />
        </div>
        <div className="">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="serviceDescription"
          >
            Service Description
          </label>
          <textarea
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="number"
            id="serviceDescription"
            placeholder="Enter Service Description"
            defaultValue={serviceDescription}
            onBlur={(e) => setUpdatedServiceDescription(e.target.value)}
          />
        </div>
        <div className="">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="serviceArea"
          >
            Service Area
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Enter service Area"
            id="serviceArea"
            defaultValue={serviceArea}
            onBlur={(e) => setUpdatedServiceArea(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col items-center justify-center  ">
          <button
            type="submit"
            className="w-max mx-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center  mb-2 active:scale-95"
          >
            Update Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateService;
