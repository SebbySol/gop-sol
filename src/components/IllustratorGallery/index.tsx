import { projects } from "../../utility/data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function IllustratorGallery() {
  return (
    <section className="bg-[#FF5500] px-6 py-10">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-4xl md:text-9xl font-bold text-black mb-5">
          Illustrator
        </h2>
        <a className="text-black text-xl text-sm hover:underline"
        >
          View More
        </a>
      </div>

      <div className="block sm:hidden">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {projects.illustrator.map((project) => (
            <SwiperSlide key={project.id} style={{ width: '280px' }}>
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-auto">
        <div className="flex flex-col gap-4">
          <div className="bg-black w-full h-auto">
            <img
              src={projects.illustrator[0].src}
              alt={projects.illustrator[0].alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-black w-full h-auto">
            <img
              src={projects.illustrator[1].src}
              alt={projects.illustrator[1].alt}
              className="w-full h-full object-fill"
            />
          </div>
          <div className="bg-black w-full h-auto"> 
            <img
              src={projects.illustrator[2].src}
              alt={projects.illustrator[2].alt}
              className="w-full h-full object-fill"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-black w-full h-[30%]" />
          <div className="bg-black w-full h-[70%]" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-black w-full h-[60%]" />
          <div className="bg-black w-full h-[40%]" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-black w-full h-[50%]" />
          <div className="bg-black w-full h-[50%]" />
        </div>
      </div>
    </section>
  );
}
