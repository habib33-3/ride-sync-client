import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../../../assets/Banner/garageCar.jpg";
import img2 from "../../../assets/Banner/late.jpg";
import img3 from "../../../assets/Banner/longRide.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full flex justify-center items-center mt-10 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 p-8 rounded-lg shadow-lg"
        // style={{ background: "url('../../../assets/Banner/bg.svg')" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex lg:flex-row-reverse flex-col justify-center items-center gap-16 py-10 lg:px-10">
              <img
                src={slide.img}
                alt=""
                className="w-1/2 h-[300px] rounded-lg shadow-lg object-cover"
              />
              <div className="px-8 py-6 rounded-3xl h-[400px] bg-cover bg-center w-1/2 bg-gradient-to-b from-gray-300 via-gray-500 to-gray-600 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <h1 className="text-center text-4xl text-gradient bg-gradient-to-r from-gray-400 via-gray-500 to-gray-1000 text-white dark:from-gray-300 dark:via-gray-500 dark:to-gray-700 bg-clip-text font-extrabold leading-tight flex flex-col items-center justify-center h-full rounded-3xl">
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
