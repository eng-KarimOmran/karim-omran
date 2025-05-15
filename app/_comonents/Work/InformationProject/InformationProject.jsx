import Image from "next/image";
import React from "react";

export default function InformationProject({ project }) {
  return (
    <div className="w-full px-1  lg:w-6/12 lg:p-5">
      <div className="border-b-[1px] border-b-zinc-700 py-3 flex flex-col gap-5">
        <span className="text-4xl md:text-xl">{project.id}</span>
        <h2 className="text-white text-3xl md:text-6xl">
          {project.name}
        </h2>
        <p>{project.description}</p>
        <div className="text-[var(--main-color)]">
          {project.technologies}
        </div>
      </div>
      <div className="pt-5 flex gap-5 items-center">
        <a
          target="_blank"
          href={project.gitHub}
          rel="noopener noreferrer"
        >
          <div className="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] bg-zinc-700 hover:scale-[1.1] transition-all duration-300">
            <Image
              src="/Icon/logo-github.gif"
              className="w-[100%]"
              alt="github"
              width={50}
              height={50}
            />
          </div>
        </a>
        <a
          target="_blank"
          href={project.demo}
          rel="noopener noreferrer"
        >
          <div className="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] bg-zinc-700 hover:scale-[1.1] transition-all duration-300 p-1">
            <Image
              src="/Icon/logo-eye.gif"
              className="w-[100%]"
              alt="eye"
              width={50}
              height={50}
            />
          </div>
        </a>
      </div>
    </div>
  );
}
