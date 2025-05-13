import React from "react";

export default function Skills({ data }) {
  return data.map((skill) => (
    <div key={skill.id} className="p-10 w-full md:w-6/12 lg:w-3/12 h-6/12">
      <div className="bg-zinc-800 text-6xl h-full rounded-3xl p-3 flex flex-col justify-center items-center relative group hover:text-[var(--main-color)] transition-all duration-300">
        <div className="absolute bottom-full mb-1 rounded-lg bg-zinc-100 text-zinc-600 min-w-[80px] text-center px-3 text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
          {skill.name}
        </div>

        {skill.icon}
      </div>
    </div>
  ));
}
