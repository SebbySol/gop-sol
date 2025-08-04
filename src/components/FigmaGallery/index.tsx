import { projects } from "../../utility/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function FigmaGallery() {
    return (
        <section className="bg-[#FF5500] lg:pb-35">

            <div className="bg-black lg:rounded-bl-[600px] lg:pb-50 pb-20">
                <h2 className="text-white text-6xl md:text-7xl font-bold text-center lg:text-right lg:mr-10 mb-15 pt-20 pb-5">
                    Figma
                </h2>
                <div className="w-full lg:ml-65 px-4">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={3}
                        spaceBetween={20}
                        loop={true}
                        freeMode={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                            stopOnLastSlide: false,
                        }}
                        speed={8000}
                        className="mySwiper lg:rounded-bl-[400px]"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                            },
                        }}
                    >
                        {projects.figma.map((project, id) => (
                            <SwiperSlide
                                key={id}
                                className="flex justify-center items-center"
                            >
                                <div className="relative group flex justify-center">
                                    <img
                                        src={project.src}
                                        alt={project.alt}
                                        className="w-[80%] sm:w-[100%] md:w-[100%] h-[250px] sm:h-[320px] md:[300px] lg:h-[280px] xl:h-[320px] 2xl:h-[450px] object-fill rounded-3xl transition-transform duration-300 hover:scale-105 shadow-lg"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white text-sm font-medium">{project.alt}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
