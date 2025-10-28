"use client";
import CountUp from "@/components/animations/CountUp";
import { MapPinIcon, MonitorCheckIcon, RadioTowerIcon } from "lucide-react";

const NossosNumeros = () => {
  return (
    <section className="nossos-numeros">
      <div className="container">
        <div className="nossos-numeros__container">
          <div className="nossos-numeros__title">
            <h2 className="title">
              Nossos <span>Números</span>
            </h2>
          </div>
          <div className="nossos-numeros__container-boxes">
            <div className="nossos-numeros__box">
              <MapPinIcon />
              <div className="nossos-numeros__text">
                <div className="nossos-numeros__text-main">
                  <CountUp
                    from={0}
                    to={102}
                    separator=","
                    direction="up"
                    duration="2"
                    className="nossos-numeros__number"
                  />
                </div>
                <div className="nossos-numeros__text-sub">
                  <h4>Municípios</h4>
                  <p>Cobertura Potencial</p>
                </div>
              </div>
            </div>
            <div className="nossos-numeros__box">
              <RadioTowerIcon />
              <div className="nossos-numeros__text">
                <div className="nossos-numeros__text-main">
                  <CountUp
                    from={1.0}
                    to={3.0}
                    separator=","
                    direction="up"
                    duration="2"
                    className="nossos-numeros__number"
                  />
                  <span className="nossos-numeros__number">milhões</span>
                </div>
                <div className="nossos-numeros__text-sub">
                  <h4>Habitantes</h4>
                  <p>Alcance Potencial</p>
                </div>
              </div>
            </div>
            <div className="nossos-numeros__box">
              <MonitorCheckIcon />
              <div className="nossos-numeros__text">
                <div className="nossos-numeros__text-main">
                  +
                  <CountUp
                    from={0}
                    to={1.3}
                    separator=","
                    direction="up"
                    duration="2"
                    className="nossos-numeros__number"
                  />
                  <span className="nossos-numeros__number">milhão</span>
                </div>
                <div className="nossos-numeros__text-sub">
                  <h4>Alcance</h4>
                  <p>Domicílios com TV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NossosNumeros;
