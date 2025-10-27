import CountUp from "./CountUp";

const NossosNumeros = () => {
  return (
    <section className="nossos-numeros">
      <div className="nossos-numeros__container">
        <div className="nossos-numeros__box">
          <CountUp
            from={0}
            to={102}
            separator=","
            direction="up"
            duration="2"
            className="count-up-text"
          />
        </div>
        <div className="nossos-numeros__box">
          <CountUp
            from={0}
            to={3.0}
            separator=","
            direction="up"
            duration="2"
            className="count-up-text"
          />
        </div>
        <div className="nossos-numeros__box">
          <CountUp
            from={0}
            to={1.3}
            separator=","
            direction="up"
            duration="2"
            className="count-up-text"
          />
        </div>
      </div>
    </section>
  );
};

export default NossosNumeros;
