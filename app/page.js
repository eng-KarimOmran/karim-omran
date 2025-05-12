"use client";
import { FaDownload } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from 'react-countup'

export default function Home() {
  const socialLinks = [
    { path: "https://github.com/eng-KarimOmran", icon: <FaGithub /> },
    { path: "https://www.linkedin.com/in/karim-omran", icon: <FaLinkedinIn /> },
    { path: "https://wa.me/01277913201", icon: <FaWhatsapp /> },
    {path: "https://mail.google.com/mail/?view=cm&to=eng.karimomran@gmail.com", icon: <SiGmail />,},
  ];

  const stats = [
    { content: "Years Experience", num: 1 },
    { content: "Projects Delivered", num: 6 },
    { content: "Technologies Mastered", num: 7 },
    { content: "Code Contributions", num: 30 },
  ];
  
  return (
    <div className="min-h-[calc(100dvh-100px)] flex flex-col justify-around">
      <div className="flex justify-between items-center flex-col-reverse md:flex-row">
        <div className="flex flex-col gap-3 items-center lg:items-start">
          <h2 className="text-xl">Software Developer</h2>
          <div className="text-5xl lg:text-7xl text-white">Hello Iam</div>
          <h3 className="text-5xl lg:text-7xl text-[var(--main-color)]">
            Karim Abdelhalim
          </h3>
          <p className="text-lg text-gray-500 max-w-[300px]">
            Passionate about building clean, user-friendly interfaces, I bring
            ideas to life using cutting-edge tools and technologies.
          </p>
          <div className="flex justify-start items-center gap-5 text-[var(--main-color)] flex-col lg:flex-row">
            <a
              className="border-[1px] border-[var(--main-color)] flex items-center justify-center gap-3 h-[35px] px-3 rounded-3xl text-sm hover:bg-[var(--main-color)]/50 transition-all duration-300"
              href="CV/CV Karim Omran.pdf"
              download="CV Karim Omran.pdf"
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
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-[255px] h-[255px] lg:w-[405px] lg:h-[405px] flex items-center justify-center">
          <svg className="absolute w-full h-full" viewBox="0 0 100 100">
            <AnimatePresence>
              <motion.circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#ed8cf2"
                strokeWidth="2"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </AnimatePresence>
          </svg>

          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="w-[240px] h-[240px] lg:w-[390px] lg:h-[390px] rounded-full overflow-hidden"
            >
              <img
                src="Img/karim.jpg"
                alt="karim"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center justify-center md:justify-between w-full my-2 flex-wrap">
        {stats.map((stat) => (
          <div
            key={stat.content}
            className="flex items-center gap-1 justify-center w-full md:w-6/12 lg:w-auto max-w-[250px] pb-3 pt-8 border-b-[1px] border-gray-300/20"
          >
            <span className="text-5xl text-white">
              {stat.content === "Years Experience" ? <><CountUp prefix="+" delay={1} start={0} end={stat.num} duration={4}/></> : <CountUp delay={1} start={0} end={stat.num} duration={3}/>}
            </span>
            <span className="max-w-[100px]">{stat.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
