"use client";
import React, { useState } from "react";
import Experience from "../_comonents/Experience/Experience";
import DataResume from "./DataResume";
import Education from "../_comonents/Education/Education";
import Skills from "../_comonents/Skills/Skills";
import AboutMe from "../_comonents/AboutMe/AboutMe";

export default function Resume() {
  const resumeSections = DataResume();

  const [selectedSection, setSelectedSection] = useState(resumeSections[0]);

  function content(section) {
    switch (section.label) {
      case "Experience":
        return <Experience data={section.data} />;
      case "Education":
        return <Education data={section.data} />;
      case "Skills":
        return <Skills data={section.data} />
      case "About me":
        return <AboutMe data={section.data} />
    }
  }

  return (
    <div className="w-full min-h-[calc(100dvh-100px)] flex justify-center items-center">
      <div className="flex justify-between flex-col lg:flex-row gap-5 w-full h-full items-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-5xl text-white">Why hire me?</h2>
          <p className="text-zinc-500 max-w-[250px]">
            Innovative, quick learner, passionate about programming, keeps pace
            with technological advancements
          </p>
          <ul className="flex flex-col gap-5">
            {resumeSections.map((section) => (
              <li
                key={section.label}
                className={`w-[250px] h-[40px] flex justify-center items-center rounded-lg ${
                  selectedSection.label === section.label
                    ? "bg-[var(--main-color)]"
                    : "bg-zinc-800"
                }`}
              >
                <button
                  onClick={() => {
                    setSelectedSection(section);
                  }}
                  className={`text-xl cursor-pointer ${
                    selectedSection.label === section.label
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <h2 className="text-3xl text-white">{selectedSection.label}</h2>
          <p className="max-w-[500px] px-2">{selectedSection.description}</p>

          <div className="h-[400px] w-full px-2 lg:w-[800px] lg:overflow-y-scroll flex flex-wrap items-center justify-center">
            {content(selectedSection)}
          </div>
        </div>
      </div>
    </div>
  );
}
