import { AiFillCar } from "react-icons/ai";
import {
  BsClock,
  BsFillJournalBookmarkFill,
  BsFillShieldFill,
} from "react-icons/bs";

const Features = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-gray-100">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">What We offer</h2>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          <div className="flex flex-col justify-center items-center gap-2">
            <BsClock className="text-3xl text-center" />
            <div className="ml-3 text-center">
              <dt className="text-lg font-medium">Flexible Rental Solutions</dt>
              <dd className="mt-2 dark:text-gray-400 ">
                Tailor Your Journey with Adjustable Rental Durations
              </dd>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <AiFillCar className="text-3xl text-center" />
            <div className="ml-3 text-center">
              <dt className="text-lg font-medium">Diverse Fleet Selection</dt>
              <dd className="mt-2 dark:text-gray-400 ">
                Drive in Style with Our Varied Vehicle Options.
              </dd>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <BsFillJournalBookmarkFill className="text-3xl text-center" />
            <div className="ml-3 text-center">
              <dt className="text-lg font-medium">Effortless Booking</dt>
              <dd className="mt-2 dark:text-gray-400 ">
                Seamless Reservations for a Stress-Free Experience.
              </dd>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <BsFillShieldFill className="text-3xl text-center" />
            <div className="ml-3 text-center">
              <dt className="text-lg font-medium">
                Safe and Transparent Transactions
              </dt>
              <dd className="mt-2 dark:text-gray-400 ">
                Your Safety, Our Priority - Secure and Transparent Transactions.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Features;
