import { Button } from "./Button";

export default function MainHero() {
  return (
    <div className="container-site relative z-10 mt-80 h-screen items-center">
      <div className="max-w-lg md:pl-4">
        <h1 className="text-4xl font-semibold leading-tight text-chocolate sm:text-5xl md:text-6xl">
          Viver e Ser
        </h1>

        <p className="mt-4 text-base leading-7 text-chocolate sm:text-lg">
          A viver & ser é um espaço de{" "}
          <span className="font-semibold">
            acolhimento, escuta e desenvolvimento do autoconhecimento através do
            movimento.
          </span>
        </p>

        <Button href="https://wa.me/55" target="_blank" className="mt-6">
          Entre em contato
        </Button>
      </div>
    </div>
  );
}
