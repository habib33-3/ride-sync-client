import { ArrowRightCircle, EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import GoogleLogin from "../../components/Social/GoogleLogin";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);

    login(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Congratulations, You are logged in ");
        navigate(location.state ? location?.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <section>
      <Helmet>
        <title>RideSync|| Login</title>
      </Helmet>

      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Don{"'"}t have an account?
            <Link
              to="/register"
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Register
            </Link>
          </p>
          <form
            onSubmit={handleLogin}
            className="mt-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    required
                    onBlur={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2 relative">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    id="password"
                    onBlur={(e) => setPassword(e.target.value)}
                    required
                  ></input>
                  <button
                    className="absolute bottom-1/4 right-1 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </button>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center  rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 active:transition-transform active:scale-90"
                >
                  Sign In <ArrowRightCircle className="ml-2 text-base" />
                </button>
              </div>
            </div>
          </form>
          <GoogleLogin />
        </div>
      </div>
    </section>
  );
};

export default Login;
