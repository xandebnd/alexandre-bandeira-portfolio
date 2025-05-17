import Image from "next/image";

const AboutMe = () => {
  return (
    <section
      id="sobre"
      className="flex w-full flex-col items-center space-y-10 rounded-lg bg-gradient-to-r from-[#34495E] to-[#2C3E50] p-10 shadow-lg md:flex-row md:justify-between md:space-y-0"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="text-center md:flex-1 md:text-left">
        <h1 className="mb-4 text-4xl font-bold">Um pouco sobre mim...</h1>
        <p className="mx-auto max-w-lg text-justify leading-relaxed text-gray-300 md:mx-0">
          Sou um desenvolvedor iniciante, apaixonado por tecnologia e inovação.
          Estou sempre em busca de aprender novas ferramentas e construir
          soluções criativas que possam gerar um impacto positivo no mundo.
        </p>
      </div>
      <div className="flex justify-center md:flex-1">
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
    </section>
  );
};

export default AboutMe;
