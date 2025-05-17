import Image from "next/image";

const Education = () => {
  return (
    <section
      id="formação"
      className="w-full rounded-lg bg-gradient-to-r from-[#34495E] to-[#2C3E50] p-10 shadow-lg"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <h2 className="mb-8 text-center text-4xl font-bold text-white">
        Formação Acadêmica
      </h2>
      <div className="space-y-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-lg bg-[#2C3E50] p-6 shadow-md transition-shadow duration-300 hover:shadow-lg md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-2xl font-semibold text-white">
              Análise e Desenvolvimento de Sistemas
            </h3>
            <span className="block text-lg text-gray-300">
              Faculdade Estácio
            </span>
            <p className="text-sm text-gray-400 italic">(2021 - 2024)</p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/estacio.png"
              alt="Logo da Faculdade Estácio"
              width={150}
              height={150}
              className="h-32 w-32 object-contain md:h-40 md:w-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
