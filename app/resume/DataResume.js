import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { MdOutlineCss } from "react-icons/md";
import { DiJavascript1 } from "react-icons/di";
import { DiResponsive } from "react-icons/di";
import { BsFiletypeScss } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiBootstrapFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiFormik } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { TbJson } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { MdAnimation } from "react-icons/md";
import { FaNpm } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { TbSeo } from "react-icons/tb";

export default function DataResume() {
  return [
    {
      label: "Education",
      description:
        "Solid academic foundation in IT and web development, focused on real-world applications and continuous learning.",
      data: {
        name: "Experience",
        content: [
          {
            id: "0",
            date: "2025 - March",
            name: "Front-End developer",
            organized: "Route Academy",
            certificate: "certificateFront-endRoute.jpg",
          },
        ],
      },
    },

    {
      label: "Experience",
      description:
        "Built responsive interfaces using React, Next.js, Tailwind. Ensured performance.",
      data: {
        name: "Experience",
        content: [{ id: null, date: null, experience: null, organized: null }],
      },
    },

    {
      label: "Skills",
      description:
        "A versatile set of technical and creative skills in front-end development, UI/UX design, and modern web technologies.",
      data: {
        name: "Skills",
        content: [
          { id: "0", name: "Html5", icon: <FaHtml5 /> },
          { id: "1", name: "Css", icon: <MdOutlineCss /> },
          { id: "2", name: "Js", icon: <DiJavascript1 /> },
          { id: "3", name: "Responsive", icon: <DiResponsive /> },
          { id: "4", name: "Scss", icon: <BsFiletypeScss /> },
          { id: "5", name: "Tailwind", icon: <RiTailwindCssFill /> },
          { id: "6", name: "Bootstrap", icon: <RiBootstrapFill /> },
          { id: "7", name: "React", icon: <FaReact /> },
          { id: "8", name: "Next", icon: <SiNextdotjs /> },
          { id: "9", name: "Redux", icon: <SiRedux /> },
          { id: "10", name: "Axios", icon: <SiAxios /> },
          { id: "11", name: "Formik", icon: <SiFormik /> },
          { id: "12", name: "Json", icon: <TbJson /> },
          { id: "13", name: "Typescript", icon: <SiTypescript /> },
          { id: "14", name: "Jest", icon: <SiJest /> },
          { id: "15", name: "Github", icon: <FaGithub /> },
          { id: "16", name: "Animation", icon: <MdAnimation /> },
          { id: "17", name: "Npm", icon: <FaNpm /> },
          { id: "18", name: "Vite", icon: <SiVite /> },
          { id: "19", name: "Seo", icon: <TbSeo /> },
        ],
      },
    },

    {
      label: "About me",
      description:
        "Front-End Developer passionate about building clean, responsive, and modern web interfaces.",
      data: {
        name: "About me",
        content: [
          {
            id: "0",
            Name: "Karim Abdelhalim",
            Experience: "+1 Year",
            Country: "Egypt",
            State: "Alexandria",
            Phone: "(+20) 1277913201",
            Email: "eng.karimomran@gmail.com",
            Languages: ["Arabic,", "English"],
            Education: "Diploma in IT",
          },
        ],
      },
    },
  ];
}
