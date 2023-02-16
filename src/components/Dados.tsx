import Image from "next/image";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGoogleCircle, AiOutlineGithub } from "react-icons/ai";
import { SiGhost } from "react-icons/si";
import dev from "../../public/avatar.png";

export const Dados = () => {
  return (
    <section id="dados">
      <div className="text-center p-10 mt-2">
        <h2 className="text-5xl py-2 text-blue-700 font-medium md:text-6xl">Gabriel José</h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-yellow-400">Desenvolvedor FullStack</h3>
      </div>
      <div className="text-5xl flex flex-wrap justify-center gap-16 py-1 text-gray-600">
        <a
          href="https://twitter.com/Josehehehehe"
          target="_blank"
          rel="noreferrer"
          className="transition duration-500 hover:scale-125 hover:text-blue-800"
        >
          <AiFillTwitterCircle title="Twitter" />
        </a>
        <a
          href="https://github.com/gabrielJGS"
          target="_blank"
          rel="noreferrer"
          className="transition duration-500 hover:scale-125 hover:text-blue-800"
        >
          <AiOutlineGithub title="Github" />
        </a>
        <a
          href="https://blog.gabrieljs.online/"
          target="_blank"
          rel="noreferrer"
          className="transition duration-500 hover:scale-125 hover:text-blue-800"
        >
          <SiGhost title="Blog" />
        </a>
        <a
          href="https://www.linkedin.com/in/gabrieljs/"
          target="_blank"
          rel="noreferrer"
          className="transition duration-500 hover:scale-125 hover:text-blue-800"
        >
          <AiFillLinkedin title="Linkedin" />
        </a>
        <a
          href="https://play.google.com/store/apps/developer?id=Gabriel+Jos%C3%A9+Guedes+da+Silva"
          target="_blank"
          rel="noreferrer"
          className="transition duration-500 hover:scale-125 hover:text-blue-800"
        >
          <AiFillGoogleCircle title="Google play" />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-blue-800 rounded-full w-60 h-60 mt-10 overflow-hidden md:h-80 md:w-80">
        <Image src={dev} alt={"Avatar customizado do Gabriel"} fill style={{ objectFit: "cover" }} />
      </div>
    </section>
  );
};
