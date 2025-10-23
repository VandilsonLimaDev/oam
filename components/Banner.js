const Banner = ({ children }) => {
  return (
    <section className="banner">
      <div className="container banner__container">{children}</div>
    </section>
  );
};

export default Banner;
