import imagemMulher from "../assets/images/imagemmulher.svg";

export default function About() {
  return (
    <section id="sobre" className="bg-beige py-24 text-chocolate">
      <div className="container-site flex flex-col items-center gap-12 md:flex-row">
        <img
          src={imagemMulher}
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

          <p className="text-lg leading-8 text-chocolate">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since 1966, when designers at Letraset and James Mosley.
          </p>
        </div>
      </div>
    </section>
  );
}
