import mulher from "../assets/images/logo.svg";

export default function About() {
  return (
    <section id="sobre" className="bg-beige py-12 text-chocolate">
      <div className="container-site flex flex-col items-center gap-12 md:flex-row">
        <img
          src={mulher}
          alt="Mulher praticando yoga"
          className="w-full max-w-md"
        />

        <div className="flex max-w-xl flex-col gap-6">
          <h2 className="text-4xl font-semibold leading-tight text-center">
            A Viver e Ser é um espaço de{" "}
            <span className="text-terracotta">
              acolhimento, escuta e desenvolvimento do autoconhecimento através
              do movimento!
            </span>
          </h2>

          <p className="text-xl text-justify font-semibold leading-8 text-chocolate">
            A Viver e Ser nasceu do desejo de oferecer um lugar onde o cuidado
            com a saúde vai além do sintoma — onde corpo, mente, alma e história
            se encontram em um mesmo espaço de acolhimento. <br />
            <br />
            Acreditamos que cada pessoa carrega uma sabedoria interna única, e
            que o caminho da cura passa por aprender a ouvi-la. Por isso,
            reunimos práticas que dialogam entre si e com você, respeitando seu
            tempo, suas crenças e sua jornada pessoal. <br />
            <br />
            Aqui, não há fórmulas prontas. Há escuta. Há presença. Há um convite
            para que você se permita viver com mais leveza e ser com mais
            autenticidade.
          </p>
        </div>
      </div>
    </section>
  );
}
