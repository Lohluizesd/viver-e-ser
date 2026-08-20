import { contacts, menuLinks, serviceLinks } from "../data/footer";
import CardFooter from "../components/CardFooter";
import FooterLinks from "../components/FooterLinks";

export default function Footer() {
  return (
    <footer className="bg-moss text-beige">
      <div className="container-site py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start gap-4">
            <h3 className="mb-5 text-xl font-semibold">Viver & Ser</h3>

            <p className="max-w-52 text-s leading-relaxed text-beige/80">
              Acolhimento, escuta e desenvolvimento do autoconhecimento através
              do movimento.
            </p>
          </div>
          <div>
            <h3 className="mb-5 text-xl font-semibold">Contatos</h3>

            <div className="flex flex-col gap-3">
              {contacts.map((contact) => (
                <CardFooter
                  key={contact.id}
                  image={contact.image}
                  description={contact.description}
                  url={contact.url}
                />
              ))}
            </div>
          </div>

          <FooterLinks title="Menu" links={menuLinks} />

          <FooterLinks title="Serviços" links={serviceLinks} />
        </div>

        <div className="mt-12 border-t border-beige/20 pt-6 text-sm text-beige/70">
          © 2026 Viver & Ser — Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
