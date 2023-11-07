import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import img1 from "../../../assets/Banner/garageCar.jpg";
import img2 from "../../../assets/Banner/late.jpg";
import img3 from "../../../assets/Banner/longRide.jpg";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Late for the office? Just call us.",
    img: img2,
  },

  {
    id: 2,
    title:
      "Your car looks good on the road, not in the garage. Rent it to us now.",
    img: img1,
  },

  {
    id: 3,
    title: "Want to go on a long ride but don't have an RV? Just contact us.",
    img: img3,
  },
];

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-full  flex justify-center items-center mt-5 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-900"
        // style={{ background: "url('../../../assets/Banner/bg.svg')" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex lg:flex-row-reverse flex-col justify-center items-center gap-16 py-10 lg:px-10">
              <img
                src={slide.img}
                alt=""
                className="w-1/2 h-[300px]"
              />
              <div className=" px-5 rounded-3xl h-[400px] bg-no-repeat bg-content w-1/2 bg-gradient-to-b from-blue-600 via-teal-500 to-blue-800">
                <h1 className="text-center text-3xl text-gradient bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-black dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 bg-clip-text text-transparent font-semibold flex flex-col items-center justify-center h-full rounded-3xl">
                  {slide.title}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
