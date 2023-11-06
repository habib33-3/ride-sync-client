import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useAuth();

  const menuItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-sky-300 font-bold shadow-sm p-2 rounded-md hover:bg-sky-400"
              : "bg-sky-100 shadow-sm p-2 rounded-md hover:bg-sky-400 "
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-sky-300 font-bold shadow-sm p-2 rounded-md hover:bg-sky-400"
              : "bg-sky-100 shadow-sm p-2 rounded-md hover:bg-sky-400 "
          }
          to="/services"
        >
          Services
        </NavLink>
      </li>

      {user && (
        <li className="bg-sky-100 shadow-sm p-2 rounded-md">Dashboard</li>
      )}
    </>
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("You are logged out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto bg-blue-200 mt-5 rounded-xl shadow-2xl border flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 bg-transparent">
          <img
            src="https://i.ibb.co/WBd3LYc/logo.png"
            alt="logo"
            className="w-8 h-8 rounded-full"
          />
          <h1 className="text-3xl font-bold">RideSync</h1>
        </div>
        {/* large device */}
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 flex items-center space-x-8">{menuItems}</ul>
        </div>
        <div className="hidden space-x-2 lg:block">
          {user ? (
            <button
              onClick={handleLogout}
              type="button"
              className="rounded-md border bg-red-600 border-black px-3 py-2 text-sm font-semibold active:scale-95 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-red-700 focus-visible:outline-black"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button
                type="button"
                className="rounded-md border bg-blue-200 border-black px-3 py-2 text-sm font-semibold active:scale-95 text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-blue-300 focus-visible:outline-black"
              >
                Log In
              </button>
            </Link>
          )}
        </div>

        {/* small device */}
        <div className="lg:hidden">
          <Menu
            onClick={toggleMenu}
            className="h-6 w-6 cursor-pointer"
          />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      
                    </span>
                    <span className="font-bold">DevUI</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4 list-none">{menuItems}</nav>
                </div>
                <Link to="/login">
                  <button
                    type="button"
                    className="rounded-md border bg-blue-200 hover:bg-blue-300 border-black px-3 py-2 text-sm font-semibold active:scale-95 text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Log In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
