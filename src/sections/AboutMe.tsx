import aboutme from "../assets/images/aboutme.svg";

export default function AboutMe() {
  return (
    <section id="quem-sou" className="bg-chocolate py-24 text-beige">
      <h2 className="text-4xl font-semibold leading-tight text-center mb-12">
        Quem sou eu?
      </h2>

      <div className="container-site flex flex-col items-center gap-12 md:flex-row">
        <img
          src={aboutme}
          alt="Sobre mim"
          className="w-full max-w-md rounded-4xl"
        />

        <div className="flex max-w-xl flex-col gap-6">
          <p className="text-lg leading-8 text-beige text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since 1966, when designers at Letraset and James Mosley. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            1966, when designers at Letraset and James Mosley.
          </p>
        </div>
      </div>
    </section>
  );
}
