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
  );
};
