import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link className="header__logo" href="/">
          <Image
            src="/oam.svg"
            width={300}
            height={0}
            sizes="(min-width: 808px) 50vw, 100vw"
            alt="Organização Arnon de Mello - OAM"
          />
        </Link>
        <nav className="header__links">
          <Link href="/">Home</Link>
          <Link href="/quemsomos">Quem Somos</Link>
          <Link href="/negocios">Negócios</Link>
          <Link href="/pessoas">Pessoas</Link>
          <Link href="/social">Social</Link>
        </nav>
      </div>
      <div className="header__bar"></div>
    </header>
  );
};

export default Header;
