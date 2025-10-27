'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BriefcaseBusiness, Sparkles, SquareStar, TrophyIcon } from 'lucide-react'


import 'swiper/css';
import 'swiper/css/parallax';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Banner = () => {
  
  return (
    <section className="banner">
      <div className="container banner__container">
        <div className="banner__text">
          <h2 className="title banner__text--title">
            Estamos ligados à vida de cada Alagoano
          </h2>
          <h5 className="subtitle banner__text--subtitle">
            Como Referência Jornalística de Alagoas, alcançamos os 102
            municípios, consolidando nossa credibilidade e o respeito ao nosso
            povo: o povo alagoano.
          </h5>
          <div className="banner__buttons">
            <button className="btn btn__icons">
              <span className="btn__icons--icon"><Sparkles /></span> <span className="btn__icons--text">Fale com nosso time de negócios</span></button>
            <button className="btn btn__icons"><span className="btn__icons--icon"><TrophyIcon /></span> <span className="btn__icons--text">Nossa História e Valores</span></button>
          </div>
        </div>
        <div className="banner_img">
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            parallax={true}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="oamSwiper"
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
  );
};

export default Banner;
