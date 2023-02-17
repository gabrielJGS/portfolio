import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="w-full px-10 py-5 flex flex-row justify-between bg-blue-800">
      <h1 className="text-2xl text-yellow-400 self-end">
        Portfólio by <span className="text-slate-100 font-bold">Gabriel José</span>
        <span> - @{new Date().getFullYear()}</span>
      </h1>
      <div className="flex flex-row">
        <h6 className="self-end text-white mx-2">Desenvolvido com</h6>
        <div className="flex items-center gap-2">
          <SiTypescript title="Typescript" width={20} height={20} className="text-[40px] mx-auto text-blue-500" />
          <SiReact title="React" width={20} height={20} className="text-[40px] mx-auto text-blue-500 rounded-xl" />
          <SiNextdotjs
            title="Nextdotjs"
            width={20}
            height={20}
            className="text-[40px] mx-auto text-slate-400 rounded-xl"
          />
          <SiTailwindcss
            title="Tailwindcss"
            width={20}
            height={20}
            className="text-[40px] mx-auto text-blue-400 rounded-xl"
          />
        </div>
      </div>
    </footer>
  );
};
