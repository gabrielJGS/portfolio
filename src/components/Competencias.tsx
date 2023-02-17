import { DiGit, DiHtml5, DiJsBadge, DiNodejs } from "react-icons/di";
import {
  SiAmazonaws,
  SiDocker,
  SiExpress,
  SiFlask,
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
  SiSqlite,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const Competencias = () => {
  return (
    <section id="competencias">
      <div>
        <h3 className="text-3xl font-bold py-2 dark:text-yellow-500">Competências</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          Hard Skills desenvolvidas atráves de cursos/webinars e projetos práticos
        </p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <DiHtml5 title="Html5" width={100} height={100} className="text-[80px] mx-auto text-orange-500" />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-orange-500">HTML5</h3>
        </div>
        <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <DiJsBadge
            title="Javascript"
            width={100}
            height={100}
            className="text-[80px] mx-auto text-amber-400 rounded-xl"
          />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-amber-400">Javascript</h3>
        </div>
        <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiTypescript
            title="Typescript"
            width={100}
            height={100}
            className="text-[80px] mx-auto text-blue-500 rounded-xl"
          />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-500">Typescript</h3>
        </div>
        <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <DiNodejs title="Nodejs" width={100} height={100} className="text-[80px] mx-auto text-green-500 rounded-xl" />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-green-500">Node.js</h3>
        </div>
        <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiExpress
            title="Express"
            width={100}
            height={100}
            className="text-[80px] mx-auto text-green-500 rounded-xl"
          />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-green-500">Express.js</h3>
        </div>
        <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiReact title="React" width={100} height={100} className="text-[80px] mx-auto text-cyan-400 rounded-xl" />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-cyan-400">React.js</h3>
        </div>
        <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiReact title="React Native" width={100} height={100} className="text-[80px] mx-auto text-blue-500 rounded-xl" />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-500">
            React
            <br /> Native
          </h3>
        </div>
        <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiNextdotjs
            title="Nextdotjs"
            width={100}
            height={100}
            className="text-[80px] mx-auto text-slate-600 rounded-xl"
          />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-slate-600">Next.js</h3>
        </div>
        <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiStyledcomponents
            title="Styledcomponents"
            width={100}
            height={100}
            className="text-[80px] mx-auto text-yellow-300 rounded-xl"
          />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-yellow-300">
            Styled
            <br />
            Components
          </h3>
        </div>
        <div className="text-center shadow-lg p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiTailwindcss
            title="Tailwindcss"
            width={100}
            height={100}
            className="text-[80px] mx-auto text-blue-400 rounded-xl"
          />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-400">
            Tail
            <br />
            Wind
          </h3>
        </div>
        <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiMongodb
            title="Mongodb"
            width={100}
            height={100}
            className="text-[80px] mx-auto text-green-500 rounded-xl"
          />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-green-500">MongoDB</h3>
        </div>
        <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiMysql title="Mysql" width={100} height={100} className="text-[80px] mx-auto text-blue-900 rounded-xl" />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-900">Mysql</h3>
        </div>
        <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiPostgresql
            title="Postgresql"
            width={100}
            height={100}
            className="text-[80px] mx-auto text-blue-400 rounded-xl"
          />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-400">PostgreSql</h3>
        </div>
        <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiSqlite title="Sqlite" width={100} height={100} className="text-[80px] mx-auto text-blue-800 rounded-xl" />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-800">SQLite</h3>
        </div>
        <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiAmazonaws
            title="Amazon AWS"
            width={100}
            height={100}
            className="text-[80px] mx-auto text-orange-500 rounded-xl"
          />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-orange-500">AWS</h3>
        </div>
        <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiLinux title="Linux" width={100} height={100} className="text-[80px] mx-auto text-slate-500 rounded-xl" />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-slate-500">Linux</h3>
        </div>
        <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiDocker title="Docker" width={100} height={100} className="text-[80px] mx-auto text-blue-400 rounded-xl" />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-400">Docker</h3>
        </div>
        <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <DiGit title="Git" width={100} height={100} className="text-[80px] mx-auto text-red-600 rounded-xl" />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-red-600">Git</h3>
        </div>
        <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiPhp title="Php" width={100} height={100} className="text-[80px] mx-auto text-blue-400 rounded-xl" />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-blue-400">PHP</h3>
        </div>
        <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiLaravel
            title="Laravel"
            width={100}
            height={100}
            className="text-[80px] mx-auto text-orange-600 rounded-xl"
          />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-orange-600">Laravel</h3>
        </div>
        <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiPython
            title="Python"
            width={100}
            height={100}
            className="text-[80px] mx-auto text-yellow-400 rounded-xl"
          />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-yellow-400">Python</h3>
        </div>
        <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiFlask title="Flask" width={100} height={100} className="text-[80px] mx-auto text-slate-600 rounded-xl" />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-slate-600">Flask</h3>
        </div>
        <div className="text-center shadow-xl p-6 rounded-tl-xl my-4 bg-white dark:bg-slate-800 transition duration-500 hover:scale-125">
          <SiJson title="Json" width={100} height={100} className="text-[80px] mx-auto text-slate-600 rounded-xl" />
          <h3 className="text-lg font-medium pt-2 pb-1 text-zinc-800 dark:text-slate-600">JSON</h3>
        </div>
      </div>
    </section>
  );
};
