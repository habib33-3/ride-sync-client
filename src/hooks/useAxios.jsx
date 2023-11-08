import axios from "axios";

const axiosBase = axios.create({
  // baseURL: "http://localhost:5000/api/v1",
  baseURL: "https://ride-sync-server.vercel.app/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  return axiosBase;
};

export default useAxios;
