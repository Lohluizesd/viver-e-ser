import { useState } from "react";
import Logo from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-30 w-full">
      <div className="container-site flex items-center justify-between px-6 py-4 md:px-0 md:py-6">
        <a href="#" aria-label="Voltar para o início">
          <Logo className="h-20 w-auto md:h-32" />
        </a>

        <nav className="hidden items-center gap-10 text-xl font-medium text-beige md:flex">
          <a href="#sobre" className="transition hover:text-terracotta">
            A viver e ser
          </a>

          <a href="#servicos" className="transition hover:text-terracotta">
            Serviços
          </a>

          <a href="#quem-sou" className="transition hover:text-terracotta">
            Quem sou eu
          </a>
        </nav>

        <button
          type="button"
          className="relative z-40 flex flex-col gap-1.5 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="h-0.5 w-7 bg-beige" />
          <span className="h-0.5 w-7 bg-beige" />
          <span className="h-0.5 w-7 bg-beige" />
        </button>
      </div>

      {isOpen && (
        <div className="mx-4 rounded-2xl bg-beige/95 p-6 shadow-lg backdrop-blur md:hidden">
          <nav className="flex flex-col gap-5 text-xl font-medium text-chocolate">
            <a href="#sobre" onClick={() => setIsOpen(false)}>
              A viver e ser
            </a>

            <a href="#servicos" onClick={() => setIsOpen(false)}>
              Serviços
            </a>

            <a href="#quem-sou" onClick={() => setIsOpen(false)}>
              Quem sou eu
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
