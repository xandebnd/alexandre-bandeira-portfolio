import ButtonBackHome from "@/components/button-back-home";

function notFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-[#34495E] to-[#2C3E50]">
      <h2 className="text-2xl text-white md:text-5xl">Página não encontrada</h2>
      <ButtonBackHome />
    </section>
  );
}

export default notFound;
