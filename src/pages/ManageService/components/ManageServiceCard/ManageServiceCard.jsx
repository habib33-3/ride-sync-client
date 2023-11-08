import PropTypes from "prop-types";
import useAxios from "../../../../hooks/useAxios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageServiceCard = ({ service, setServices, services }) => {
  const { serviceName, serviceImg, _id } = service;
  const axios = useAxios();

  const handleDeleteService = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((res) => {
      if (res.isConfirmed) {
        axios.delete(`/deleteService/${_id}`).then((data) => {
          console.log(data.data.deletedCount);
          if (data.data.deletedCount > 0) {
            const remaining = services.filter((item) => item._id !== _id);
            setServices(remaining);
            Swal.fire("Deleted!", "Service has been deleted.", "success");
          }
        });
      }
    });
  };

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
          <Link to={`/updateService/${_id}`}>
            <button className="bg-blue-600 px-4 py-2 text-white rounded-md font-bold active:scale-95">
              Update
            </button>
          </Link>
          <button
            onClick={handleDeleteService}
            className="bg-red-600 px-4 py-2 text-white rounded-md font-bold active:scale-95"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

ManageServiceCard.propTypes = {
  service: PropTypes.object,
  setServices: PropTypes.func,
  services: PropTypes.array,
};

export default ManageServiceCard;
