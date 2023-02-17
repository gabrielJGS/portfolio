import ImageGallery from "react-image-gallery";
import { AiFillTwitterCircle } from "react-icons/ai";
import { DiNodejs } from "react-icons/di";
import {
  SiAmazonaws,
  SiExpress,
  SiFlask,
  SiGoogletranslate,
  SiJson,
  SiLinux,
  SiPython,
  SiReact,
  SiRealm,
} from "react-icons/si";

export const Projetos = () => {
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
            selecionando o período de tempo que você deseja ser lembrado, e caso você acerte, o app aumentará o período,
            e o contador de acertos aumentará, incentivando sua memória!
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
            <SiReact title="React" width={20} height={20} className="text-[40px] mx-auto text-blue-500 rounded-xl" />
            <SiRealm title="Realm" width={20} height={20} className="text-[40px] mx-auto text-purple-800" />
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
            <SiFlask title="Flask" width={20} height={20} className="text-[40px] mx-auto text-slate-600 rounded-xl" />
            <SiPython title="Python" width={20} height={20} className="text-[40px] mx-auto text-yellow-500" />
            <SiJson title="Json" width={20} height={20} className="text-[40px] mx-auto text-slate-600 rounded-xl" />
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
            &apos;extrair&apos; o texto da imagem, permitindo que copie o texto ou que um usuário cego consiga usar o
            leitor por exemplo...
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
            <AiFillTwitterCircle title="Twitter" width={20} height={20} className="text-[40px] mx-auto text-blue-600" />
            <SiPython title="Python" width={20} height={20} className="text-[40px] mx-auto text-yellow-500" />
            <SiGoogletranslate
              title="Googletranslate"
              width={20}
              height={20}
              className="text-[40px] mx-auto text-blue-500"
            />
          </div>
        </div>
        <div className="basis-1/4 p-4 flex-1 rounded-lg bg-white dark:bg-slate-800">
          <ImageGallery items={projetoEsclarecaImgs} showFullscreenButton />
          <h5 className="text-xl font-bold text-center pb-2 dark:text-yellow-600">Esclareça</h5>
          <p className="text-md text-center py-1 px-4 leading-8 text-gray-700 dark:text-gray-400">
            O projeto é baseado em uma rede social focada para o estudo, de forma a ajudar na resolução de dúvidas e
            compartilhamento de conteúdo. Ele foi elaborado como TCC de Gabriel José, Gabriel Lourenço e Reidner Rocha
            para o término do curso de Sistemas de Informação no ano de 2020.
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
            <SiLinux title="Linux" width={20} height={20} className="text-[40px] mx-auto text-slate-500 rounded-xl" />
            <SiAmazonaws
              title="Amazon"
              width={20}
              height={20}
              className="text-[40px] mx-auto text-orange-500 rounded-xl"
            />
            <DiNodejs
              title="Node.js"
              width={20}
              height={20}
              className="text-[40px] mx-auto text-green-500 rounded-xl"
            />
            <SiExpress
              title="Express"
              width={20}
              height={20}
              className="text-[40px] mx-auto text-green-500 rounded-xl"
            />
            <SiReact title="React" width={20} height={20} className="text-[40px] mx-auto text-blue-500 rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
