import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

export const Footer = () => {
  return (
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
  );
};
