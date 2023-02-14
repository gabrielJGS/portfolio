import Head from "next/head";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGoogleCircle, AiOutlineGithub } from "react-icons/ai";
import { DiGit, DiHtml5, DiJsBadge, DiNodejs, DiReact } from "react-icons/di";
import {
  SiAmazonaws,
  SiDocker,
  SiExpress,
  SiGhost,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiSqlite,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import ImageGallery from "react-image-gallery";

import Image from "next/image";
import dev from "../../public/avatar.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const projetoEsclarecaImgs = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfólio Gabriel José</title>
        <meta name="description" content="Portfólio criado por Gabriel José, utilizando as tecnologias React.js, Next.js, Typescript, React Icons, react-image-gallery, e TailwindCSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.ico" />
      </Head>
      <nav className="w-full fixed px-10 py-5 flex justify-between bg-blue-800 z-50">
        <h1 className="text-2xl text-yellow-400">Portfólio</h1>
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
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li>
            <BsMoonStarsFill
              className="cursor-pointer ml-4 text-2xl text-white dark:text-yellow-400 transition-all filter hover:scale-125 hover:drop-shadow-[7px_7px_2px_rgba(0,0,0,0.7)]"
              onClick={() => setDarkMode(!darkMode)}
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
      <div className="w-full fixed z-40 bg-yellow-400 dark:bg-yellow-600" style={{ height: "74px" }}></div>
      <main className="min-h-screen bg-white pt-10 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section id="dados">
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-blue-800 font-medium md:text-6xl">Gabriel José</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-yellow-400">Desenvolvedor FullStack</h3>
            {/* <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Lorem Ipsum Dolor Sit amet
            </p> */}
          </div>
          <div className="text-5xl flex flex-wrap justify-center gap-16 py-3 text-gray-600">
            <a
              href="https://twitter.com/Josehehehehe"
              target="_blank"
              rel="noreferrer"
              className="transition duration-500 hover:scale-125 hover:text-blue-800"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://github.com/gabrielJGS"
              target="_blank"
              rel="noreferrer"
              className="transition duration-500 hover:scale-125 hover:text-blue-800"
            >
              <AiOutlineGithub />
            </a>
            <a
              href="https://blog.gabrieljs.online/"
              target="_blank"
              rel="noreferrer"
              className="transition duration-500 hover:scale-125 hover:text-blue-800"
            >
              <SiGhost />
            </a>
            <a
              href="https://www.linkedin.com/in/gabrieljs/"
              target="_blank"
              rel="noreferrer"
              className="transition duration-500 hover:scale-125 hover:text-blue-800"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://play.google.com/store/apps/developer?id=Gabriel+Jos%C3%A9+Guedes+da+Silva"
              target="_blank"
              rel="noreferrer"
              className="transition duration-500 hover:scale-125 hover:text-blue-800"
            >
              <AiFillGoogleCircle />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-blue-800 rounded-full w-60 h-60 mt-20 overflow-hidden md:h-80 md:w-80">
            <Image src={dev} alt={"Avatar customizado do Gabriel"} fill style={{ objectFit: "cover" }} />
          </div>
        </section>
        <section id="competencias">
          <div>
            <h3 className="text-3xl py-1 dark:text-yellow-500">Competências</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Hard Skills desenvolvidas atráves de cursos/webinars e projetos práticos
              {/* <span className="text-yellow-500">Fulano</span> Loorem dolor sit amet */}
            </p>
          </div>
          <div className="flex flex-wrap gap-10 justify-center">
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <DiHtml5 width={100} height={100} className="text-[80px] mx-auto text-orange-500" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-orange-500">HTML5</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <DiJsBadge width={100} height={100} className="text-[80px] mx-auto text-amber-400 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-amber-400">Javascript</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiTypescript width={100} height={100} className="text-[80px] mx-auto text-blue-500 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-500">Typescript</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <DiNodejs width={100} height={100} className="text-[80px] mx-auto text-green-500 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-green-500">Node.js</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiExpress width={100} height={100} className="text-[80px] mx-auto text-green-500 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-green-500">Express.js</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <DiReact width={100} height={100} className="text-[80px] mx-auto text-cyan-400 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-cyan-400">React.js</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <DiReact width={100} height={100} className="text-[80px] mx-auto text-blue-500 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-500">
                React
                <br /> Native
              </h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiNextdotjs width={100} height={100} className="text-[80px] mx-auto text-slate-600 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-slate-600">Next.js</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiStyledcomponents width={100} height={100} className="text-[80px] mx-auto text-yellow-300 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-yellow-300">
                Styled
                <br />
                Components
              </h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiTailwindcss width={100} height={100} className="text-[80px] mx-auto text-blue-400 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-400">
                Tail
                <br />
                Wind
              </h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiMongodb width={100} height={100} className="text-[80px] mx-auto text-green-500 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-green-500">MongoDB</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiMysql width={100} height={100} className="text-[80px] mx-auto text-blue-900 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-900">Mysql</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiPostgresql width={100} height={100} className="text-[80px] mx-auto text-blue-400 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-400">PostgreSql</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiSqlite width={100} height={100} className="text-[80px] mx-auto text-blue-800 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-800">SQLite</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiAmazonaws width={100} height={100} className="text-[80px] mx-auto text-orange-500 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-orange-500">AWS</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiLinux width={100} height={100} className="text-[80px] mx-auto text-slate-500 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-slate-500">Linux</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiDocker width={100} height={100} className="text-[80px] mx-auto text-blue-400 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-400">Docker</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <DiGit width={100} height={100} className="text-[80px] mx-auto text-red-600 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-red-600">Git</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiPhp width={100} height={100} className="text-[80px] mx-auto text-blue-400 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-400">PHP</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-gray-100 dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiLaravel width={100} height={100} className="text-[80px] mx-auto text-orange-600 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-orange-600">Laravel</h3>
            </div>
          </div>
        </section>
        <section id="portfolio">
          <div>
            <h3 className="text-3xl pt-12 pb-2 dark:text-yellow-500">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Projetos realizados demonstrando as competências acima
              {/* <span className="text-teal-500">Ciclano</span> Lorem dolor sit amet */}
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <ImageGallery items={projetoEsclarecaImgs} />
              <h5 className="text-xl text-center pb-2 dark:text-white">Esclareça</h5>
              <p className="text-md text-center py-1 px-4 leading-8 text-gray-700 dark:text-gray-400">
                Texto de descrição do projeto            
              </p>
            </div>
            <div className="basis-1/3 flex-1">
              <ImageGallery items={projetoEsclarecaImgs} />
            </div>
            <div className="basis-1/3 flex-1">
              <ImageGallery items={projetoEsclarecaImgs} />
            </div>
            <div className="basis-1/3 flex-1">
              <ImageGallery items={projetoEsclarecaImgs} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
