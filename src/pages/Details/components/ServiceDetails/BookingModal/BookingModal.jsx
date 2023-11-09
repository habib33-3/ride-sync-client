import PropTypes from "prop-types";
import useAuth from "../../../../../hooks/useAuth";
import { useState } from "react";
import useAxios from "../../../../../hooks/useAxios";
import toast from "react-hot-toast";

const BookingModal = ({ isOpen, onClose, service }) => {
  const [date, setDate] = useState("");
  const [instruction, setInstruction] = useState("");

  const axios = useAxios();

  const { user } = useAuth();

  const { serviceImg, serviceName, servicePrice, providerEmail } = service;

  const handleAddBooking = (e) => {
    e.preventDefault();

    const booking = {
      serviceName,
      serviceImg,
      servicePrice,
      providerEmail,
      userEmail: user.email,
      date,
      instruction,
      status: "pending",
    };

    axios.post("/addBooking", booking).then((data) => {
      console.log(data.data);
      if (data.data.insertedId) {
        toast.success("Booking Added Successfully");
        onClose();
      }
    });
  };

  return (
    isOpen && (
      <div
        id="booking-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover-bg-gray-600 dark:hover-text-white"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close Modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <form
                className="space-y-6"
                onSubmit={handleAddBooking}
              >
                <div>
                  <label
                    htmlFor="serviceName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Service Name
                  </label>
                  <input
                    type="text"
                    id="serviceName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={serviceName}
                    disabled
                  />
                </div>

                <div>
                  <label
                    htmlFor="serviceImg"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Service Image
                  </label>
                  <input
                    type="text"
                    id="serviceImg"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={serviceImg}
                    disabled
                  />
                </div>

                <div>
                  <label
                    htmlFor="providerEmail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Provider Email
                  </label>
                  <input
                    type="email"
                    id="providerEmail"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={providerEmail}
                    disabled
                  />
                </div>

                <div>
                  <label
                    htmlFor="userEmail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="userEmail"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={user.email}
                    disabled
                  />
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    onBlur={(e) => setDate(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="instruction"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Instruction
                  </label>
                  <input
                    type="text"
                    id="instruction"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Any Instruction...."
                    required
                    onBlur={(e) => setInstruction(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="servicePrice"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Service Price
                  </label>
                  <input
                    type="number"
                    id="servicePrice"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={servicePrice}
                    disabled
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Purchase
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

BookingModal.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  service: PropTypes.object,
};

export default BookingModal;
