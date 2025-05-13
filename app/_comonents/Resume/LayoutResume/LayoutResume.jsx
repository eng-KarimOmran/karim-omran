import React from "react";
import Link from "next/link";

export default function LayoutResume({ data, contentComponent }) {
  const { name, description, content } = data;

  const Sections = [
    { path: "/resume/education", name: "Education" },
    { path: "/resume/experience", name: "Experience" },
    { path: "/resume/skills", name: "Skills" },
    { path: "/resume/about-me", name: "About me" },
  ];

  return (
    <div className="w-full min-h-[calc(100dvh-100px)] flex justify-center items-center p-3">
      <div className="flex justify-between flex-col lg:flex-row gap-5 w-full h-full items-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-5xl text-white">Why hire me?</h2>
          <p className="text-zinc-500 max-w-[250px]">
            Innovative, quick learner, passionate about programming, keeps pace
            with technological advancements
          </p>

          <ul className="flex flex-col gap-5">
            {Sections.map((section) => (
              <Link
                href={section.path}
                key={section.path}
                className={`w-[250px] h-[40px] flex justify-center items-center mx-auto rounded-lg hover:bg-[var(--main-color)] transition-all group ${
                  section.name?.toLowerCase() === name?.toLowerCase()
                    ? "bg-[var(--main-color)]"
                    : "bg-zinc-800"
                }`}
              >
                <span
                  className={`text-xl group-hover:text-black ${
                    section.name?.toLowerCase() === name?.toLowerCase()
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  {section.name}
                </span>
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <h2 className="text-3xl text-white">{name}</h2>
          <p className="max-w-[500px] px-2">{description}</p>

          <div className="h-[400px] w-full px-1 lg:w-[800px] lg:overflow-y-scroll flex flex-wrap items-center justify-center fadeIn-content">
            {content[0].id ? (
              contentComponent
            ) : (
              <div className="text-3xl text-center">No {name}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
