import CardService from "@/components/CardService";

export default function Services() {
  return (
    <section id="servicos" className="bg-beige py-24 text-chocolate">
      <div className="container-site flex flex-col gap-12">
        <h2 className="text-center text-4xl font-semibold leading-tight">
          Serviços Oferecidos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CardService
            title="Consultoria"
            description="Avaliação e orientação especializada para sua empresa."
          />
          <CardService
            title="Treinamento"
            description="Programas de capacitação para equipe e liderança."
          />
          <CardService
            title="Assessoria"
            description="Suporte estratégico para tomada de decisões."
          />
        </div>
      </div>
    </section>
  );
}
