import Image from "next/image";
import React from "react";

const Noticia = ({
  url = "#",
  img = "img-default.jpg",
  chapeu = "sit amet",
  title = "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
  resume = "Labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. ",
  width = 940,
  height = 500,
  aux = "",
}) => {
  return (
    <a href={url} className="noticias-recentes__box relative" target="_blank">
      <div className="noticias-recentes__box--img absolute flex align-sub top-0 left-0 z-0 w-full">
        <figure>
          <Image
            className="rounded-2xl w-full"
            src={`/${img}`}
            width={width}
            height={height}
            alt=""
          />
        </figure>
      </div>
      <div className="noticias-recentes__box--text relative z-10 mt-auto mb-0 w-fit">
        <figcaption className="px-8 py-8">
          <p className="uppercase text-xs flex gap-2 items-center">
            <span className="h-2.5 w-2.5 border-zinc-300 border-3 rounded-full block"></span>
            {chapeu}
          </p>
          <h2 className={`title py-0 leading-[1.2] font-bold ${aux}`}>
            {title}
          </h2>
          <p className="hidden">{resume}</p>
        </figcaption>
      </div>
    </a>
  );
};

export default Noticia;
