import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const [serviceImg, setServiceImg] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceArea, setServiceArea] = useState("");

  const { user } = useAuth();

  const axios = useAxios();

  const handleAddProduct = (e) => {
    e.preventDefault();

    const product = {
      serviceImg,
      serviceName,
      providerName: user?.displayName,
      providerEmail: user?.email,
      providerImg: user?.photoURL,
      servicePrice,
      serviceDescription,
      serviceArea,
    };

    axios.post("/addService", product).then((data) => {
      if (data.data.insertedId) {
        toast.success("product added successfully");
        // e.target.reset();
      }
    });
  };

  return (
    <div className="my-10">
      <Helmet>
        <title>RideSync|| Add Service</title>
      </Helmet>

      <h1 className="text-5xl text-center font-bold ">Add Your Service</h1>
      <form
        onSubmit={handleAddProduct}
        action=""
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
            onBlur={(e) => setServiceImg(e.target.value)}
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
            onBlur={(e) => setServiceName(e.target.value)}
            required
          ></input>
        </div>
        <div className="">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="providerName"
          >
            Provider Name
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            id="providerName"
            value={user.displayName}
            disabled
          ></input>
        </div>
        <div className="">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="providerEmail"
          >
            Provider Email
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            id="providerEmail"
            value={user.email}
            disabled
          ></input>
        </div>
        <div className="">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="providerImg"
          >
            Provider Image
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            id="providerImg"
            value={user.photoURL}
            disabled
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
            onBlur={(e) => setServicePrice(e.target.value)}
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
            onBlur={(e) => setServiceDescription(e.target.value)}
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
            onBlur={(e) => setServiceArea(e.target.value)}
            required
          ></input>
        </div>
        <div className="flex flex-col items-center justify-center  ">
          <button
            type="submit"
            className="w-max mx-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center  mb-2 active:scale-95"
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
