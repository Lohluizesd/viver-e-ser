import hero from "../assets/images/hero.svg";
import { Navbar } from "../components/Navbar";
import MainHero from "../components/MainHero";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-cover bg-[65%_center] bg-no-repeat md:bg-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Overlay somente no mobile */}
      <div className="absolute inset-0 bg-chocolate/35 md:hidden" />

      <Navbar />
      <MainHero />
    </section>
  );
}
