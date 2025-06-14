import React from "react";
import NoData from "../../../Components/NoData/NoData";

export default function ContentSkills({ data , dataPage }) {
  console.log(data.length)
  if (data.length === 0) {
    return <NoData page={dataPage.name} />;
  }
  return data.map((skill) => (
    <div key={skill.id} className="p-10 w-full md:w-6/12 lg:w-3/12 h-6/12">
      <div className="bg-zinc-800 text-6xl h-full rounded-3xl p-3 flex flex-col justify-center items-center relative group active:text-[var(--main-color)] hover:text-[var(--main-color)] transition-all duration-300">
        <div className="absolute bottom-full mb-1 rounded-lg bg-zinc-100 text-zinc-600 min-w-[80px] text-center px-3 text-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300">
          {skill.name}
        </div>

        {skill.icon}
      </div>
    </div>
  ));
}
