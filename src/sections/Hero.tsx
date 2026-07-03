import heroBg from "../assets/images/hero.svg";
import { Navbar } from "../components/Navbar";
import MainHero from "../components/MainHero";

export default function Hero() {
  return (
    <section
      className="relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat text-chocolate"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <Navbar />
      <MainHero />
    </section>
  );
}
