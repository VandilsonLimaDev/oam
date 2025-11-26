import Image from "next/image";
import React from "react";

const NoticiasRecentes = () => {
  return (
    <section className="noticias-recentes">
      <section className="container noticias-recentes__container">
        <div className="noticias-recentes__title">
          <h2 className="title">
            Notícias <span>Recentes</span>
          </h2>
          <div className="noticias-recentes__content grid grid-cols-12 gap-6">
            <div className="noticias-recentes__destaque col-span-6">
              <div className="noticias-recentes__box">
                <div className="noticias-recentes__box--img">
                  <Image src="/img-1.webp" width="940" height="500" alt="" />
                </div>
                <div className="noticias-recentes__box--text">
                  <h2 className="title text-4xl">
                    STF declara fim de processo, e Bolsonaro já pode cumprir
                    pena
                  </h2>
                  <p>
                    Bolsonaro foi condenado a 27 anos e 3 meses de prisão em
                    regime fechado
                  </p>
                </div>
              </div>
            </div>
            <div className="noticias-recentes__swiper col-span-6">swiper</div>
          </div>

          <div className="noticias-recentes__container-boxes"></div>
        </div>
      </section>
    </section>
  );
};

export default NoticiasRecentes;
