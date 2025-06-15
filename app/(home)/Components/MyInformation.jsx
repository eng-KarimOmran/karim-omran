import React from 'react'
import { FaDownload } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export default function MyInformation() {
      const socialLinks = [
    { path: "https://github.com/eng-KarimOmran", icon: <FaGithub /> },
    { path: "https://www.linkedin.com/in/karim-omran", icon: <FaLinkedinIn /> },
    { path: "https://wa.me/201277913201", icon: <FaWhatsapp /> },
    {
      path: "mailto:eng.karimomran@gmail.com",
      icon: <SiGmail />,
    },
  ];
  return (
        <div className='flex flex-col gap-5'>
          <div className="text-xl text-center md:text-start">
            Front-End Developer
          </div>
          <div className="text-4xl lg:text-7xl text-center md:text-start">
            Hello I'm
          </div>
          <div className="text-4xl text-center md:text-start lg:text-7xl text-[var(--main-color)]">
            Karim Omran
          </div>
          <p className="text-lg text-gray-300 text-center md:text-start flex flex-col gap-2 md:w-[300px] lg:w-[500px]">
            Front-End Developer skilled in building responsive web apps with
            React.js, Next.js, JavaScript, and Tailwind CSS. Experienced in
            performance optimization and API integration. I work well both
            independently and in teams.
          </p>
          <div className="flex justify-start items-center md:items-start lg:items-center gap-5 text-[var(--main-color)] flex-col lg:flex-row py-3">
            <a
              className="border-[1px] border-[var(--main-color)] flex items-center justify-center gap-3 h-[35px] px-3 rounded-3xl text-sm hover:bg-[var(--main-color)]/50 transition-all duration-300"
              href="/CV/Karim Abdelhalim.pdf"
              download
            >
              <span className="uppercase">DOWNLOAD CV</span>
              <FaDownload />
            </a>
            <div className="flex items-center justify-center gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.path}
                  className="w-[35px] h-[35px] rounded-[50%] border-[1px] border-[var(--main-color)] p-0.5 flex justify-center items-center hover:bg-[var(--main-color)]/50 transition-all duration-300"
                  target="_blank"
                  href={link.path}
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
  )
}
