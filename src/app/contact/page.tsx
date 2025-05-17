import ButtonBackHome from "@/components/button-back-home";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-b from-[#1A2A3A] to-[#2C3E50] px-4">
      <div className="w-full max-w-2xl space-y-10 text-center text-white">
        <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Contato
        </h2>
        <ul className="space-y-6">
          <li>
            <a
              href="https://github.com/xandebnd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-[#34495E] p-4 text-base shadow-md transition-all hover:bg-blue-500 hover:shadow-lg sm:flex-row sm:text-lg md:text-xl"
            >
              <FiGithub size={28} />
              <span className="break-all">https://github.com/xandebnd</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/xandebnd/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-[#34495E] p-4 text-base shadow-md transition-all hover:bg-blue-500 hover:shadow-lg sm:flex-row sm:text-lg md:text-xl"
            >
              <FiLinkedin size={28} />
              <span className="break-all">
                https://www.linkedin.com/in/xandebnd
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/xandebnd/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-[#34495E] p-4 text-base shadow-md transition-all hover:bg-blue-500 hover:shadow-lg sm:flex-row sm:text-lg md:text-xl"
            >
              <FiInstagram size={28} />
              <span className="break-all">
                https://www.instagram.com/xandebnd
              </span>
            </a>
          </li>
        </ul>

        <ButtonBackHome />
      </div>
    </div>
  );
};

export default Contact;
