import Image from "next/image";
import React from "react";
import Noticia from "@/components/Noticia";

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
              <Noticia aux="text-3xl" />
            </div>
            <div className="noticias-recentes__swiper col-span-6">
              <div className="grid grid-cols-2 gap-8 justify-stretch">
                <Noticia width={282} height={228} aux="text-2xl col-span-1" />
                <Noticia width={282} height={228} aux="text-2xl col-span-1" />

                <Noticia width={282} height={228} aux="text-2xl col-span-1" />
                <Noticia width={282} height={228} aux="text-2xl col-span-1" />
              </div>
            </div>
          </div>

          <div className="noticias-recentes__container-boxes"></div>
        </div>
      </section>
    </section>
  );
};

export default NoticiasRecentes;
