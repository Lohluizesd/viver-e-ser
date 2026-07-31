import { useState } from "react";
import Logo from "./Logo";
import { Button } from "./Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-20 w-full">
      <div className="container-site flex items-center justify-between py-6">
        <a href="#" aria-label="Voltar para o início">
          <Logo className="h-20 w-auto" />
        </a>

        <nav className="hidden items-center gap-10 text-base font-medium text-chocolate md:flex">
          <a href="#sobre" className="transition hover:text-terracotta">
            A viver e ser
          </a>

          <a href="#servicos" className="transition hover:text-terracotta">
            Serviços
          </a>

          <a href="#quem-sou" className="transition hover:text-terracotta">
            Quem sou eu
          </a>

          <Button href="https://wa.me/55" target="_blank" className="px-6 py-2">
            Entre em contato
          </Button>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Abrir menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="h-0.5 w-7 bg-chocolate" />
          <span className="h-0.5 w-7 bg-chocolate" />
          <span className="h-0.5 w-7 bg-chocolate" />
        </button>
      </div>

      {isOpen && (
        <div className="mx-6 rounded-3xl bg-beige/95 p-6 shadow-lg backdrop-blur md:hidden">
          <nav className="flex flex-col gap-5 text-lg font-medium text-chocolate">
            <a href="#sobre" onClick={() => setIsOpen(false)}>
              A viver e ser
            </a>

            <a href="#servicos" onClick={() => setIsOpen(false)}>
              Serviços
            </a>

            <a href="#quem-sou" onClick={() => setIsOpen(false)}>
              Quem sou eu
            </a>

            <Button
              href="https://wa.me/55"
              target="_blank"
              className="mt-2 w-full"
            >
              Entre em contato
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
