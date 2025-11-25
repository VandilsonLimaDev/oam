import Image from "next/image";
import React from "react";

const Missao = () => {
  return (
    <section className="missao">
      <div className="container missao__container">
        <div className="missao__title">
          <h2 className="title">
            Nossa <span>Missão</span>
          </h2>
        </div>
        <div className="md:grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-6 grid grid-cols-12 bg-zinc-100 rounded-2xl relative">
            <div className="h-10 w-4 bg-fuchsia-500 rounded-br-full rounded-tl-full absolute top-0 left-0"></div>
            <div className="col-span-4">
              <Image
                className="rounded-2xl"
                src="/missao-credibilidade-e-respeito.jpg"
                width="219"
                height="422"
                alt="Missão: Credibilidade e Respeito"
              />
            </div>
            <div className="col-span-8 px-8 ">
              <h2 className="title text-2xl md:text-5xl">
                Credibilidade e Respeito
              </h2>
              <p>
                Mais do que a preferência de leitores, telespectadores, ouvintes
                e internautas, essas empresas conquistaram a credibilidade e o
                respeito de todo o povo alagoano porque sempre tiveram um
                trabalho pautado na inovação constante e no compromisso com a
                boa informação.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 grid gap-6">
            <div className="bg-zinc-100 rounded-2xl pl-12 pr-8 py-6 relative">
              <div className="h-10 w-4 bg-amber-500 rounded-br-full rounded-tl-full absolute top-0 left-0"></div>
              <h2 className="title pt-0">Independência</h2>
              <p>
                Os veículos de comunicação da OAM consolidaram-se pelo trabalho
                independente, inspirado nos valores democráticos, na defesa dos
                direitos da sociedade e da liberdade de expressão.
              </p>
            </div>
            <div className="bg-zinc-100 rounded-2xl pl-12 pr-8 py-6 relative">
              <div className="h-10 w-4 bg-lime-500 rounded-br-full rounded-tl-full absolute top-0 left-0"></div>
              <h2 className="title pt-0">Referência jornalística</h2>
              <p>
                A cobertura diária dos fatos mais importantes com imparcialidade
                e independência transformou este trabalho em referência
                jornalística e preferência também dos anunciantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Missao;
