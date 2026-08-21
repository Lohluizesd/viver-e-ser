import CardService from "../components/CardService";
import { services } from "../data/services";

export default function Services() {
  return (
    <section
      id="servicos"
      className="bg-beige py-12 text-center font-semibold text-chocolate md:py-20"
    >
      <div className="container-site flex flex-col gap-8 md:gap-12">
        <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
          Serviços Oferecidos
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const isLast = index === services.length - 1;
            const isAloneInLastRow = services.length % 3 === 1 && isLast;

            return (
              <div
                key={service.id}
                className={isAloneInLastRow ? "md:col-start-2" : ""}
              >
                <CardService
                  image={service.image}
                  title={service.title}
                  description={service.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
