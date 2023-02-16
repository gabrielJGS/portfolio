import { BsMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import logo from "../../public/logo.png";

export const Navbar = (props: any) => {
  const darkMode = props.darkMode;
  return (
    <>
      <nav className="w-full fixed px-10 py-2 flex justify-between bg-blue-800 z-50">
        <div className="flex w-full h-16 justify-start items-center">
          <Image src={logo} alt={"Logo do portfólio"} className="h-10 w-10" />
          <h1 className="m-2 text-2xl font-bold text-yellow-400">Portfólio</h1>
        </div>
        <ul className="flex items-center gap-2">
          <li>
            <a
              className="text-white font-thin hidden md:flex transition-all hover:scale-110 hover:text-yellow-400"
              href="#dados"
            >
              Dados
            </a>
          </li>
          <li>
            <a
              className="text-white font-thin hidden md:flex transition-all hover:scale-110 hover:text-yellow-400"
              href="#competencias"
            >
              Competências
            </a>
          </li>
          <li>
            <a
              className="text-white font-thin hidden md:flex transition-all hover:scale-110 hover:text-yellow-400"
              href="#projetos"
            >
              Projetos
            </a>
          </li>
          <li>
            <BsMoonStarsFill
              className="cursor-pointer ml-4 text-2xl text-white dark:text-yellow-400 transition-all filter hover:scale-125 hover:drop-shadow-[7px_7px_2px_rgba(0,0,0,0.7)]"
              onClick={props.changeDarkMode}
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-blue-400 to-blue-700 text-white px-4 py-2 rounded-md ml-8 transition-all hover:drop-shadow-[0_5px_15px_#c0df14b2]"
              href="/Curriculo_Gabriel_Jose.pdf"
              download
            >
              Currículo
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="w-full fixed z-40 shadow-2xl dark:drop-shadow-[0_1px_4px_#c0df14b2] bg-yellow-400 dark:bg-yellow-600"
        style={{ height: "82px" }}
      ></div>
    </>
  );
};
