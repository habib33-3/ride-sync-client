import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div
      onClick={handleGoogleLogin}
      className=" mt-5 flex gap-3 items-center justify-center text-2xl bg-blue-200  px-4 py-2 rounded-full w-full hover:bg-blue-400 transition duration-300 ease-in-out cursor-pointer active:scale-95"
    >
      <p className="text-gray-700">Or continue with</p>
      <FcGoogle />
    </div>
  );
};

export default GoogleLogin;
