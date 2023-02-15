import Head from "next/head";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGoogleCircle, AiOutlineGithub } from "react-icons/ai";
import { DiGit, DiHtml5, DiJsBadge, DiNodejs, DiReact } from "react-icons/di";
import {
  SiAmazonaws,
  SiDocker,
  SiExpress,
  SiFlask,
  SiGhost,
  SiGoogletranslate,
  SiJson,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRealm,
  SiSqlite,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import ImageGallery from "react-image-gallery";

import Image from "next/image";
import dev from "../../public/avatar.png";
import logo from "../../public/logo.png";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  const projetoEsclarecaImgs = [
    {
      original: "https://user-images.githubusercontent.com/82184751/132075958-d5299a6b-062a-47bc-9522-c9e321615418.png",
    },
    {
      original: "https://user-images.githubusercontent.com/82184751/132076004-21bee89e-1314-407f-88be-a02d5d774eb4.png",
    },
    {
      original: "https://user-images.githubusercontent.com/82184751/132075996-46fec8c0-dd23-4744-a6c9-7963dfa33d9e.png",
    },
    {
      original: "https://user-images.githubusercontent.com/82184751/132076149-31aa6ac6-c1ff-4525-978b-195d4fdd5f9c.png",
    },
    {
      original: "https://user-images.githubusercontent.com/82184751/132076163-fa385ec0-0da0-46ce-ae1f-a93b62ab4444.png",
    },
    {
      original: "https://user-images.githubusercontent.com/82184751/132076228-9f66acb1-c59d-4150-a649-e03c4132c04f.png",
    },
  ];
  const projetoImgTranslator = [
    {
      original: "https://user-images.githubusercontent.com/82184751/132076655-45e9d1cc-f8c0-4f5d-a19f-dca33f97fcff.png",
    },
    {
      original: "https://user-images.githubusercontent.com/82184751/132076643-7ed2cc44-ebab-49c6-91e1-abefc52493cc.png",
    },
    {
      original: "https://user-images.githubusercontent.com/82184751/132076666-8cb704d0-41b5-4089-9339-0088050494a3.png",
    },
  ];
  const projetoRecordar = [
    {
      original:
        "https://play-lh.googleusercontent.com/d0ELPSkrCFE4AjeN5NTip_Pl58TUIS8lLYfDjwaxBG43zKwQI8zF-yd-SAlKwhMHHkw=w2560-h1440-rw",
    },
    {
      original:
        "https://play-lh.googleusercontent.com/qtW8ZJ6Aem96hsrC_23bReDwvWsf87XkmkBhsMzySVHFMNasytoXSRJ1c9q4U5UC8zA=w2560-h1440-rw",
    },
    {
      original:
        "https://play-lh.googleusercontent.com/6VNNxmQ4iDUEDiXTIvWtnrMVjasUgW_zs9oRKpE2FfkmCk2tcf7H6QHA73lEWPzjx3Q=w2560-h1440-rw",
    },
    {
      original:
        "https://play-lh.googleusercontent.com/uGM8KSqT4gLiX-dlpsjpQFWSf35O6yuadxCvLERuq4iz__srFr1uXqZWopGgxa1rd0A=w2560-h1440-rw",
    },
    {
      original:
        "https://play-lh.googleusercontent.com/KX5fb7izegUos3lFszmNnqzthNBqjccjTm0Air0j9_KjcrGohxtI2OvI9Agl-funj7Us=w2560-h1440-rw",
    },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfólio Gabriel José</title>
        <meta
          name="description"
          content="Portfólio criado por Gabriel José, utilizando as tecnologias React.js, Next.js, Typescript, React Icons, react-image-gallery, e TailwindCSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.ico" />
      </Head>
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
      <div
        className="w-full fixed z-40 shadow-2xl dark:drop-shadow-[0_1px_4px_#c0df14b2] bg-yellow-400 dark:bg-yellow-600"
        style={{ height: "82px" }}
      ></div>
      <main className="min-h-screen pt-12 px-10 md:px-20 lg:px-40 bg-slate-100 transition duration-500 dark:bg-gray-900">
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
          <div className="relative mx-auto bg-gradient-to-b from-blue-800 rounded-full w-60 h-60 mt-10 overflow-hidden md:h-80 md:w-80">
            <Image src={dev} alt={"Avatar customizado do Gabriel"} fill style={{ objectFit: "cover" }} />
          </div>
        </section>
        <section id="competencias">
          <div>
            <h3 className="text-3xl font-bold py-2 dark:text-yellow-500">Competências</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Hard Skills desenvolvidas atráves de cursos/webinars e projetos práticos
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <DiHtml5 width={100} height={100} className="text-[80px] mx-auto text-orange-500" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-orange-500">HTML5</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <DiJsBadge width={100} height={100} className="text-[80px] mx-auto text-amber-400 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-amber-400">Javascript</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiTypescript width={100} height={100} className="text-[80px] mx-auto text-blue-500 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-500">Typescript</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <DiNodejs width={100} height={100} className="text-[80px] mx-auto text-green-500 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-green-500">Node.js</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiExpress width={100} height={100} className="text-[80px] mx-auto text-green-500 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-green-500">Express.js</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiReact width={100} height={100} className="text-[80px] mx-auto text-cyan-400 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-cyan-400">React.js</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiReact width={100} height={100} className="text-[80px] mx-auto text-blue-500 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-500">
                React
                <br /> Native
              </h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiNextdotjs width={100} height={100} className="text-[80px] mx-auto text-slate-600 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-slate-600">Next.js</h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiStyledcomponents width={100} height={100} className="text-[80px] mx-auto text-yellow-300 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-yellow-300">
                Styled
                <br />
                Components
              </h3>
            </div>
            <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiTailwindcss width={100} height={100} className="text-[80px] mx-auto text-blue-400 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-400">
                Tail
                <br />
                Wind
              </h3>
            </div>
            <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiMongodb width={100} height={100} className="text-[80px] mx-auto text-green-500 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-green-500">MongoDB</h3>
            </div>
            <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiMysql width={100} height={100} className="text-[80px] mx-auto text-blue-900 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-900">Mysql</h3>
            </div>
            <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiPostgresql width={100} height={100} className="text-[80px] mx-auto text-blue-400 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-400">PostgreSql</h3>
            </div>
            <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiSqlite width={100} height={100} className="text-[80px] mx-auto text-blue-800 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-800">SQLite</h3>
            </div>
            <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiAmazonaws width={100} height={100} className="text-[80px] mx-auto text-orange-500 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-orange-500">AWS</h3>
            </div>
            <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiLinux width={100} height={100} className="text-[80px] mx-auto text-slate-500 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-slate-500">Linux</h3>
            </div>
            <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiDocker width={100} height={100} className="text-[80px] mx-auto text-blue-400 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-400">Docker</h3>
            </div>
            <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <DiGit width={100} height={100} className="text-[80px] mx-auto text-red-600 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-red-600">Git</h3>
            </div>
            <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiPhp width={100} height={100} className="text-[80px] mx-auto text-blue-400 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-400">PHP</h3>
            </div>
            <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiLaravel width={100} height={100} className="text-[80px] mx-auto text-orange-600 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-orange-600">Laravel</h3>
            </div>
            <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiPython width={100} height={100} className="text-[80px] mx-auto text-yellow-400 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-yellow-400">Python</h3>
            </div>
            <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiFlask width={100} height={100} className="text-[80px] mx-auto text-slate-600 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-slate-600">Flask</h3>
            </div>
            <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
              <SiJson width={100} height={100} className="text-[80px] mx-auto text-slate-600 rounded-xl" />
              <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-slate-600">JSON</h3>
            </div>
          </div>
        </section>
        <section id="projetos">
          <div>
            <h3 className="text-3xl font-bold pt-12 pb-2 dark:text-yellow-500">Projetos</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Apps/Serviços realizados demonstrando as competências destacadas de forma prática
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/4 p-4 flex-1 rounded-lg bg-white dark:bg-slate-800">
              <ImageGallery items={projetoRecordar} showFullscreenButton />
              <h5 className="text-xl font-bold text-center pb-2 dark:text-yellow-600">Recordar</h5>
              <p className="text-md text-center py-1 px-4 leading-8 text-gray-700 dark:text-gray-400">
                Tem dificuldade para decorar um novo número de telefone, aquela resposta longa de uma prova difícil ou o
                aniversário de namoro? Este é o aplicativo que irá te ajudar... Simplesmente adicione um novo lembrete,
                selecionando o período de tempo que você deseja ser lembrado, e caso você acerte, o app aumentará o
                período, e o contador de acertos aumentará, incentivando sua memória!
                <a
                  href="https://play.google.com/store/apps/details?id=com.gabrieljs.recordar"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-600 font-bold"
                >
                  {" "}
                  Download
                </a>
              </p>
              <div className="flex flex-wrap gap-10 justify-center">
                <SiReact width={20} height={20} className="text-[40px] mx-auto text-blue-500 rounded-xl" />
                <SiRealm width={20} height={20} className="text-[40px] mx-auto text-purple-800" />
              </div>
            </div>
            <div className="basis-1/4 p-4 flex-1 rounded-lg bg-white dark:bg-slate-800">
              <h5 className="text-xl font-bold text-center pb-2 dark:text-yellow-600">E-Nota API</h5>
              <p className="text-md text-center py-1 px-4 leading-8 text-gray-700 dark:text-gray-400">
                Essa é uma API Python/Flask com o propósito de fazer o web-scraping dos conteúdos de uma Nota fiscal e
                retornar via JSON
                <a
                  href="https://github.com/gabrielJGS/enota_api"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold"
                >
                  {" "}
                  Repositório
                </a>
              </p>
              <div className="flex flex-wrap gap-10 justify-center">
                <SiFlask width={20} height={20} className="text-[40px] mx-auto text-slate-600 rounded-xl" />
                <SiPython width={20} height={20} className="text-[40px] mx-auto text-yellow-500" />
                <SiJson width={20} height={20} className="text-[40px] mx-auto text-slate-600 rounded-xl" />
              </div>
            </div>
            <div className="basis-1/4 p-4 flex-1 rounded-lg bg-white dark:bg-slate-800">
              <ImageGallery items={projetoImgTranslator} showFullscreenButton />
              <h5 className="text-xl font-bold text-center pb-2 dark:text-yellow-600">Twitter - Image Translator</h5>
              <p className="text-md text-center py-1 px-4 leading-8 text-gray-700 dark:text-gray-400">
                Um{" "}
                <a
                  href="https://twitter.com/translate_image"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold"
                >
                  bot para o Twitter
                </a>{" "}
                para tradução de imagens. Um usuário pode marcar o robô em um post que contenha uma imagem e ele irá
                &apos;extrair&apos; o texto da imagem, permitindo que copie o texto ou que um usuário cego consiga usar
                o leitor por exemplo...
                <a
                  href="https://github.com/gabrielJGS/ImageTranslator"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold"
                >
                  {" "}
                  Repositório
                </a>
              </p>
              <div className="flex flex-wrap gap-10 justify-center">
                <AiFillTwitterCircle width={20} height={20} className="text-[40px] mx-auto text-blue-600" />
                <SiPython width={20} height={20} className="text-[40px] mx-auto text-yellow-500" />
                <SiGoogletranslate width={20} height={20} className="text-[40px] mx-auto text-blue-500" />
              </div>
            </div>
            <div className="basis-1/4 p-4 flex-1 rounded-lg bg-white dark:bg-slate-800">
              <ImageGallery items={projetoEsclarecaImgs} showFullscreenButton />
              <h5 className="text-xl font-bold text-center pb-2 dark:text-yellow-600">Esclareça</h5>
              <p className="text-md text-center py-1 px-4 leading-8 text-gray-700 dark:text-gray-400">
                O projeto é baseado em uma rede social focada para o estudo, de forma a ajudar na resolução de dúvidas e
                compartilhamento de conteúdo. Ele foi elaborado como TCC de Gabriel José, Gabriel Lourenço e Reidner
                Rocha para o término do curso de Sistemas de Informação no ano de 2020.
                <a
                  href="https://github.com/gabrielJGS/esclarecaTcc"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold"
                >
                  {" "}
                  Repositório
                </a>
              </p>
              <div className="flex flex-wrap gap-10 justify-center">
                <SiLinux width={20} height={20} className="text-[40px] mx-auto text-slate-500 rounded-xl" />
                <SiAmazonaws width={20} height={20} className="text-[40px] mx-auto text-orange-500 rounded-xl" />
                <DiNodejs width={20} height={20} className="text-[40px] mx-auto text-green-500 rounded-xl" />
                <SiExpress width={20} height={20} className="text-[40px] mx-auto text-green-500 rounded-xl" />
                <SiReact width={20} height={20} className="text-[40px] mx-auto text-blue-500 rounded-xl" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full px-10 py-5 flex justify-between bg-blue-800">
        <h1 className="text-2xl text-yellow-400">
          Portfólio by <span className="text-slate-100 font-bold">Gabriel José</span>
          <span> - @{new Date().getFullYear()}</span>
        </h1>
        <ul className="flex items-center gap-2">
          <li>
            <SiReact width={20} height={20} className="text-[40px] mx-auto text-blue-500 rounded-xl" />
          </li>
          <li>
            <SiNextdotjs width={20} height={20} className="text-[40px] mx-auto text-slate-400 rounded-xl" />
          </li>
          <li>
            <SiTailwindcss width={20} height={20} className="text-[40px] mx-auto text-blue-400 rounded-xl" />
          </li>
        </ul>
      </footer>
    </div>
  );
}
