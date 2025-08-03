import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react"; // optional
import classNames from "classnames";

const testimonials = [
  {
    name: "Jennifer",
    location: "Banani",
    text: "Kathbiraly is a fastest growing ecommerce site in Bangladesh. I have ordered several times from the platform. Every time I got the one I just wanted. I wish best for their future!",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Ahmed",
    location: "Dhanmondi",
    text: "Amazing service! I was surprised by the quick delivery and quality products.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Nadia",
    location: "Gulshan",
    text: "The best online platform I’ve used so far in Bangladesh. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/55.jpg"
  },
  {
    name: "Tania",
    location: "Mirpur",
    text: "Super reliable platform! Their delivery and customer service are fantastic.",
    image: "https://randomuser.me/api/portraits/women/62.jpg"
  },
  {
    name: "Rahim",
    location: "Uttara",
    text: "I love shopping here. It's simple, fast, and trustworthy.",
    image: "https://randomuser.me/api/portraits/men/41.jpg"
  }
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative bg-black text-white py-16 px-6 md:px-12 rounded-3xl overflow-hidden container mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#fca311]">Testimonial</h2>
        <p className="text-sm text-gray-400 mt-2">what customer say about us</p>
        <div className="w-12 mx-auto mt-2 border-b-2 border-white/30" />
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="my-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed mb-8 px-4 md:px-0">
                {testimonial.text}
              </p>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                {testimonials.map((t, i) => (
                  <img
                    key={i}
                    src={t.image}
                    alt={t.name}
                    className={classNames(
                      "w-16 h-16 rounded-full border-4 transition duration-300",
                      i === index
                        ? "border-pink-400 scale-110"
                        : "border-gray-600 opacity-70"
                    )}
                  />
                ))}
              </div>

              <p className="mt-4 font-semibold">
                {testimonial.name}{" "}
                <span className="text-gray-400 font-normal">
                  - From {testimonial.location}
                </span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button
        ref={prevRef}
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-[#fef3e6] text-black rounded-full w-12 h-12 flex items-center justify-center z-10"
      >
        <ArrowLeft />
      </button>

      <button
        ref={nextRef}
        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-[#fef3e6] text-black rounded-full w-12 h-12 flex items-center justify-center z-10"
      >
        <ArrowRight />
      </button>

      {/* Wavy Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,96L80,90.7C160,85,320,75,480,69.3C640,64,800,64,960,69.3C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
