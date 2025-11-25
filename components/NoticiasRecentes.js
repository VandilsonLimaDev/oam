import React from "react";

const NoticiasRecentes = () => {
  return (
    <section className="noticias-recentes">
      <section className="container noticias-recentes__container">
        <div className="noticias-recentes__title">
          <h2 className="title">
            Notícias <span>Recentes</span>
          </h2>

          <div className="noticias-recentes__container-boxes"></div>
        </div>
      </section>
    </section>
  );
};

export default NoticiasRecentes;
