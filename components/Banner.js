"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import {
  BriefcaseBusiness,
  Sparkles,
  SquareStar,
  TrophyIcon,
} from "lucide-react";

import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
              <span className="btn__icons--icon">
                <Sparkles />
              </span>{" "}
              <span className="btn__icons--text">
                Fale com nosso time de negócios
              </span>
            </button>
            <button className="btn btn__icons">
              <span className="btn__icons--icon">
                <TrophyIcon />
              </span>{" "}
              <span className="btn__icons--text">Nossa História e Valores</span>
            </button>
          </div>
        </div>
        <div className="banner_img">
          {/* <Image
            src="/apresentadores1.png"
            alt="Apresentadores"
            width={500}
            height={500}
          /> */}
          <Swiper
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={30}
            parallax={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="heroSwiper"
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <Image
                src="/banner_hero_1.png"
                alt="Bom dia AL"
                width={336}
                height={400}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/banner_hero_2.png"
                alt="Bom dia AL"
                width={336}
                height={400}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/banner_hero_3.png"
                alt="Bom dia AL"
                width={336}
                height={400}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Banner;
