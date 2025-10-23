import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main>
      <Banner>
        <div className="banner__text">
          <h2 className="title banner__text--title">
            Estamos ligados à vida de cada Alagoano
          </h2>
          <h5 className="subtitle banner__text--subtitle">
            Como Referência Jornalística de Alagoas, alcançamos os 102
            municípios, consolidando nossa credibilidade e o respeito ao nosso
            povo: o povo alagoano.
          </h5>
        </div>
        <div className="banner_img">teste</div>
      </Banner>
    </main>
  );
}
