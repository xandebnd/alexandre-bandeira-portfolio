import { techs } from "@/app/_constants/techs";
import TechList from "@/components/tech-list";

const Techs = () => {
  return (
    <section
      className="w-full rounded-lg bg-gradient-to-r from-[#34495E] to-[#2C3E50] p-10 shadow-lg"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <h2 className="mb-8 text-center text-4xl font-bold text-white">
        Tecnologias
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <TechList title="Frontend" techs={techs.frontend} />
        <TechList title="Backend" techs={techs.backend} />
        <TechList title="Banco de Dados" techs={techs.database} />
      </div>
    </section>
  );
};

export default Techs;
