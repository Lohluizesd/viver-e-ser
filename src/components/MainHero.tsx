import { Button } from "./Button";

export default function MainHero() {
  return (
    <div className="container-site relative z-10 flex min-h-screen items-center pt-24 md:pt-32">
      <div className="max-w-lg">
        <h1 className="text-3xl font-bold leading-tight text-beige md:text-4xl md:text-chocolate">
          Viver e Ser – Terapias Integrativas
        </h1>

        <p className="mt-4 text-lg leading-7 text-beige md:text-xl md:text-chocolate">
          A viver e ser é um espaço para{" "}
          <span className="font-semibold">
            você se reconectar com quem realmente é!
          </span>
        </p>

        <Button
          href="https://wa.me/5531992107100"
          target="_blank"
          className="mt-6"
          variant="primary"
        >
          Entre em contato
        </Button>
      </div>
    </div>
  );
}
