import CardService from "../components/ServiceCard";
import { services } from "../data/services";

export default function Services() {
  return (
    <section
      id="servicos"
      className="bg-beige py-24 text-chocolate font-semibold text-center"
    >
      <div className="container-site flex flex-col gap-12">
        <h2 className="text-center text-4xl font-semibold leading-tight">
          Serviços Oferecidos
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <CardService
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
