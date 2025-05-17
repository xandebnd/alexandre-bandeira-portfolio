import { socials } from "@/app/_constants/socials";

const Footer = () => {
  return (
    <footer className="mx-auto mt-auto w-full max-w-screen-lg rounded-lg bg-gradient-to-r from-[#34495E] to-[#2C3E50] py-3 text-center text-gray-300 shadow-lg">
      <p className="text-sm">
        Desenvolvido por{" "}
        <a
          href="https://github.com/xandebnd"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alexandre Bandeira
        </a>{" "}
        &copy; {new Date().getFullYear()}
      </p>

      <div className="mt-4 flex justify-center gap-3">
        {socials.map((social) => (
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition-colors duration-300"
            key={social.name}
          >
            {<social.icon size={18} className={social.className} />}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
