"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const NossasMarcasCarrossel = () => {
  const empresas = [
    { id: 1, alt: "Circuito Arnon de Mello", src: "circuito.png" },
    { id: 2, alt: "Rádio Gazeta FM 93.1 - Maceió", src: "fm93.1.png" },
    { id: 4, alt: "Rádio Gazeta FM 101.1 - Pão de Açúcar", src: "fm101.1.png" },
    { id: 3, alt: "Rádio Gazeta FM 101.3 - Arapiraca", src: "fm101.3.png" },
    { id: 5, alt: "Jornal Gazeta de Alagoas", src: "gazetadealagoas.png" },
    { id: 6, alt: "Gazetaweb.com", src: "gazetaweb.png" },
    { id: 7, alt: "Rádio MIX 98.3 Maceió", src: "mix.png" },
    { id: 8, alt: "TV Gazeta de Alagoas", src: "tvgazeta.png" },
  ];

  return (
    <section className="container">
      <div className="nossas-marcas__container">
        <div className="nossas-marcas__title">
          <h2 className="title">
            Nossas <span>Marcas</span>
          </h2>
        </div>
        <div className="nossas-marcas__logos">
          <Swiper
            speed={6000}
            rewind={true}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              stopOnLastSlide: false,
            }}
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
                slidesPerView: 7,
                spaceBetween: 90,
              },
            }}
          >
            {empresas.map(({ id, alt, src }) => (
              <SwiperSlide key={id}>
                <Image
                  src={`/empresas/${src}`}
                  alt={alt}
                  width={300}
                  height={217}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NossasMarcasCarrossel;
