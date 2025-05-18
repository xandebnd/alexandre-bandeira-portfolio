import Image from "next/image";
import Section from "./section";

const AboutMe = () => {
  return (
    <Section
      id="sobre"
      //className="w-full rounded-lg bg-gradient-to-r from-[#34495E] to-[#2C3E50] py-10 shadow-lg"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 md:flex-row">
        <div className="md:w-1/2">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Um pouco sobre mim...
          </h1>
          <p className="text-justify leading-relaxed text-gray-300">
            Sou um desenvolvedor iniciante, apaixonado por tecnologia e
            inovação. Estou sempre em busca de aprender novas ferramentas e
            construir soluções criativas que possam gerar um impacto positivo no
            mundo.
          </p>
        </div>
        <div className="flex justify-end md:w-1/2">
          <Image
            src="https://avatars.githubusercontent.com/u/77036584?v=4"
            alt="Foto de Alexandre Bandeira."
            width={300}
            height={300}
            quality={100}
            priority
            className="rounded-full shadow-md"
          />
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
