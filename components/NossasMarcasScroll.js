"use client";
import Image from "next/image";
import InfiniteScroll from "./animations/InfiniteScroll";

const NossasMarcasScroll = () => {
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
    <section className="container nossas-marcas__container">
      <div className="nossas-marcas__title">
        <h2>
          Nossas <span>Marcas</span>
        </h2>
      </div>
      <div className="nossas-marcas__logos">
        <InfiniteScroll
          isTilted={true}
          tiltDirection="left"
          autoplay={true}
          autoplaySpeed={0.1}
          autoplayDirection="down"
          pauseOnHover={true}
        >
          {empresas.map(({ id, alt, src }) => (
            <div className="nossas-marcas__link" key={id}>
              <Image
                src={`/empresas/${src}`}
                alt={alt}
                width={250}
                height={250}
              />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default NossasMarcasScroll;
