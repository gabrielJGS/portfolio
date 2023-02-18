import Head from "next/head";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Dados } from "@/components/Dados";
import { Competencias } from "@/components/Competencias";
import { Projetos } from "@/components/Projetos";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  function changeDarkMode() {
    setDarkMode(!darkMode);
  }
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

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
      <Navbar changeDarkMode={changeDarkMode} />
      <main className="min-h-screen pt-12 px-10 md:px-20 lg:px-40 bg-slate-100 transition duration-500 dark:bg-gray-900">
        <Dados />
        <Competencias />
        <Projetos />
      </main>
      <Footer />
    </div>
  );
}
