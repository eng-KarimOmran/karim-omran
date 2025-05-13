import React from "react";

import LayoutResume from "@/app/_comonents/Resume/LayoutResume/LayoutResume";
import Skills from "@/app/_comonents/Resume/Skills/Skills";

import { 
  MdAnimation 
} from "react-icons/md";
import { 
  DiResponsive 
} from "react-icons/di";
import { 
  BsFiletypeScss 
} from "react-icons/bs";
import { 
  TbSeo 
} from "react-icons/tb";
import {
  SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiBootstrap,
  SiReact, SiNextdotjs, SiRedux, SiAxios, SiFormik, SiJson,
  SiTypescript, SiJest, SiGithub, SiNpm, SiVite
} from "react-icons/si";

const skillsData = [
  { id: "0", name: "Html5", icon: <SiHtml5 /> },
  { id: "1", name: "Css", icon: <SiCss3 /> },
  { id: "2", name: "JavaScript", icon: <SiJavascript /> },
  { id: "3", name: "Responsive Design", icon: <DiResponsive /> },
  { id: "4", name: "SCSS", icon: <BsFiletypeScss /> },
  { id: "5", name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { id: "6", name: "Bootstrap", icon: <SiBootstrap /> },
  { id: "7", name: "React", icon: <SiReact /> },
  { id: "8", name: "Next.js", icon: <SiNextdotjs /> },
  { id: "9", name: "Redux", icon: <SiRedux /> },
  { id: "10", name: "Axios", icon: <SiAxios /> },
  { id: "11", name: "Formik", icon: <SiFormik /> },
  { id: "12", name: "JSON", icon: <SiJson /> },
  { id: "13", name: "TypeScript", icon: <SiTypescript /> },
  { id: "14", name: "Jest", icon: <SiJest /> },
  { id: "15", name: "GitHub", icon: <SiGithub /> },
  { id: "16", name: "Animation", icon: <MdAnimation /> },
  { id: "17", name: "NPM", icon: <SiNpm /> },
  { id: "18", name: "Vite", icon: <SiVite /> },
  { id: "19", name: "SEO", icon: <TbSeo /> },
];

const data = {
  name: "Skills",
  description:
    "A versatile set of technical and creative skills in front-end development, UI/UX design, and modern web technologies.",
  content: skillsData,
};

export default function SkillsPage() {
  return (
    <LayoutResume
      data={data}
      contentComponent={<Skills data={data.content} />}
    />
  );
}
