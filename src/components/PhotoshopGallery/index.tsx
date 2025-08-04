import { projects } from "../../utility/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from 'framer-motion';

import "swiper/css";

export default function PhotoshopGallery() {
    return (
        <section className="bg-[#ff4f00] py-20 px-4 lg:min-h-screen">
            <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-black text-5xl md:text-9xl font-bold text-center mb-15 lg:mb-32">
                Photoshop
            </motion.h2>

            <div className="w-full max-w-none mx-auto px-4 max-h-[350px] md:max-h-[550px] lg:max-h-none">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={3}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    className="mySwiper"
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
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 85,
                        },
                    }}
                >
                    {projects.photoshop.map((project, id) => (
                        <SwiperSlide
                            key={id}
                            className="rounded-xl overflow-hidden"
                        >
                            <div className="relative group space-y-50">
                                <img
                                    src={project.src}
                                    alt={project.alt}
                                    className="w-full h-[350px] sm:h-[400px] md:h-[550px] object-cover rounded-xl hover:scale-105"
                                />
                                <div className="absolute inset-0 rounded-xl" />
                                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-sm font-medium">{project.alt}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
