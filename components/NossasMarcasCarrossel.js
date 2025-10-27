'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const NossasMarcasCarrossel = () => {
  return (
    <section className="container nossas-marcas__container">
        <div className="nossas-marcas__title">
            <h2>Nossas <span>Marcas</span></h2>
            <div className="nossas-marcas__logos">
            <Swiper
            slidesPerView={3}
            spaceBetween={30}

            modules={[Autoplay]}
            className="nossasmarcascarrossel"
            breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}

          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
            </div>
        </div>
    </section>
  )
}

export default NossasMarcasCarrossel
