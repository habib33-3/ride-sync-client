import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-gray-800 text-gray-100">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400">
              <img
                src="https://i.ibb.co/WBd3LYc/logo.png"
                alt="logo"
              />
            </div>
            <span className="self-center text-2xl font-semibold">RideSync</span>
          </a>
        </div>
        <div className="space-y-3">
          <h3 className="track uppercase text-gray-50">Company</h3>
          <ul className="space-y-1">
            <li>
              <a
                rel="noopener noreferrer"
                href="#"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="#"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="track uppercase text-gray-50">Contact</h3>
            <ul className="space-y-1">
              <li>
                <h2 className="text-md font-semibold">RideSync</h2>
              </li>

              <li className="text-md font-semibold flex gap-2">
                <AiOutlineMail className="text-2xl" /> <p>info@ridesync.com</p>
              </li>

              <li className="text-md font-semibold flex gap-2">
                <AiOutlinePhone className="text-2xl" /> <p>(555) 987-6543</p>
              </li>

              <li className="text-md font-semibold flex gap-2">
                <RiCustomerService2Fill className="text-2xl" />
                <p>(555) 789-0123</p>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="uppercase text-gray-50">Address</h3>
            <ul className="space-y-1">
              <li className="text-md font-semibold">
                789 Synchronicity Street,
              </li>
              <li className="text-md font-semibold">
                Metroville, Rideville 12345
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-gray-50">Social media</div>
            <div className="flex justify-start space-x-3">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center p-1"
              >
                <BsFacebook className="text-3xl" />
              </a>
              <a
                rel="noopener noreferrer"
                title="Twitter"
                className="flex items-center p-1"
              >
                <BsTwitter className="text-3xl" />
              </a>
              <a
                rel="noopener noreferrer"
                title="Instagram"
                className="flex items-center p-1"
              >
                <BsInstagram className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
