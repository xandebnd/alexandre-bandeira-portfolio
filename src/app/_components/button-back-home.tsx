import Link from "next/link";

const ButtonBackHome = () => {
  return (
    <Link
      href="/"
      className="mt-8 inline-block rounded-lg bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-blue-600 hover:shadow-lg sm:text-lg"
    >
      Voltar à tela inicial
    </Link>
  );
};

export default ButtonBackHome;
