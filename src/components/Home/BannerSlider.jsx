import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const slides = [
    {
        id: 1,
        image: "https://i.ibb.co/chzDd4YD/e1579ef41a00dcf4df46b1c310443a28a9a762eb.png", // replace with your real banner path
        alt: "Sale is live now",
    },
    {
        id: 2,
        image: "https://i.ibb.co/397BGVK5/aaac6a92556644cf1f89d7ed074bafb9d01208ed.png",
        alt: "Buy More & Win",
    },
    {
        id: 3,
        image: "https://i.ibb.co/397BGVK5/aaac6a92556644cf1f89d7ed074bafb9d01208ed.png",
        alt: "Buy More & Win",
    },
    // you can add more slides here
];

const BannerSlider = () => {
    return (
        <div className="container mx-auto">
            <div className="relative w-full max-w-full overflow-hidden py-6 px-5 md:px-15">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    slidesPerView={1}
                    spaceBetween={24}
                    breakpoints={{
                        640: { slidesPerView: 1.2 },
                        1024: { slidesPerView: 2, spaceBetween: 32 },
                    }}
                    className="py-2"
                >
                    {slides.map((s) => (
                        <SwiperSlide key={s.id}>
                            <div className="rounded-xl overflow-hidden shadow-lg p-2 md:p-5  border-2 border-dashed border-amber-500">
                                <img
                                    src={s.image}
                                    alt={s.alt}
                                    className="w-full h-40 object-cover block rounded-xl "
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom arrows */}
                <button
                    className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white px-3 py-3 rounded-full shadow flex items-center justify-center"
                    aria-label="Previous"
                >
                    <HiChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                    className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white px-3 py-3 rounded-full shadow flex items-center justify-center"
                    aria-label="Next"
                >
                    <HiChevronRight className="w-6 h-6 text-gray-700" />
                </button>
            </div>
        </div>
    );
};

export default BannerSlider;
