import { motion } from "framer-motion";

import aboutme from "../assets/images/aboutme.jpeg";
import aboutme2 from "../assets/images/aboutme1.jpeg";

export default function AboutMe() {
  return (
    <section id="quem-sou" className="bg-chocolate py-16 text-beige md:py-24">
      <div className="container-site">
        <motion.h2
          className="mb-16 text-center text-4xl font-semibold md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Quem sou eu?
        </motion.h2>

        <motion.div
          className="grid items-center gap-6 md:grid-cols-2 md:gap-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={aboutme}
            alt="Sobre mim"
            className="mx-auto aspect-[4/5] w-full max-w-xs rounded-[2rem] object-cover sm:max-w-sm"
          />

          <div className="mx-auto flex max-w-xl flex-col gap-5 text-justify">
            <p className="text-lg font-semibold leading-7 text-center sm:text-xl sm:leading-8">
              Nem sempre coube nas caixas que o mundo me ofereceu.
            </p>

            <p className="text-base leading-7 sm:text-lg sm:leading-8">
              Sou mulher, bruxa, espiritualista. Sou psicóloga formada — mas
              logo percebi que a mente sozinha não explica tudo. Sou terapeuta
              somática — porque o corpo guarda o que a palavra às vezes não
              alcança. Sou reikiana — porque a energia cura onde o toque não
              chega. Sou taróloga — porque os símbolos falam com a alma quando o
              racional se cala.Sou reikiana — porque a energia cura onde o toque
              não chega. Sou psicoterapeuta junguiana — porque acredito que os
              sonhos, os arquétipos e o inconsciente nos guiam em direção à
              nossa totalidade.
            </p>

            <p className="text-lg font-semibold leading-7 text-center sm:text-xl sm:leading-8">
              Não escolhi um único título.
              <br />
              Escolhi a liberdade de ser inteira.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 grid items-center gap-6 md:grid-cols-2 md:gap-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="order-2 mx-auto flex max-w-xl flex-col gap-5 text-justify md:order-1">
            <p className="text-lg font-semibold leading-7 text-center sm:text-xl sm:leading-8">
              E foi assim que nasceu a Viver e Ser: da soma de todas essas
              escutas.
            </p>
            <p className="text-base  leading-7 sm:text-lg sm:leading-8">
              Da certeza de que o cuidado integral não cabe em uma única
              abordagem — e que cada pessoa merece um espaço onde pode ser
              acolhida em sua complexidade. Acredito que o autoconhecimento é
              libertador. Não porque nos torna perfeitos, mas porque nos torna
              donos da nossa própria história.
            </p>
            <p className="text-base leading-7 sm:text-lg sm:leading-8">
              O bem-estar que você busca não está do lado de fora. Ele começa
              com o primeiro movimento em direção a si mesmo(a). Um passo
              pequeno. Uma sessão. Uma pergunta honesta. Um{" "}
              <span className="font-bold text-terracotta">SIM</span> para sua
              melhoria.
            </p>
            <p className="text-base leading-7 sm:text-lg sm:leading-8">
              A Psicoterapia Junguiana, que já faz parte da minha trajetória há
              algum tempo, encontrou na Viver e Ser um lugar para florescer
              ainda mais — porque aqui ela pode caminhar lado a lado com o Tarô,
              o Reiki, a Terapia Somática e tantas outras práticas que integram
              o ser humano em sua totalidade. Se você também cansou de se
              encaixar em fórmulas prontas e quer um espaço onde pode ser quem
              realmente é… eu estou aqui.
            </p>
            <p className="text-lg font-semibold leading-7 text-center sm:text-xl sm:leading-8">
              Te convido a dar esse primeiro movimento comigo 🌱
            </p>
          </div>

          <img
            src={aboutme2}
            alt="Viver e Ser"
            className="order-1 mx-auto aspect-[4/5] w-full max-w-xs rounded-[2rem] object-cover sm:max-w-sm md:order-2"
          />
        </motion.div>
      </div>
    </section>
  );
}
