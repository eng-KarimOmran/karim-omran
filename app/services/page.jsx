"use client";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      Service: "Frontend Development",
      discretion: "I create responsive, clean, and modern front-end designs.",
    },
    {
      Service: "Web Testing",
      discretion:
        "I ensure functionality, usability, performance, security, and compatibility.",
    },
    {
      Service: "Logo Design",
      discretion:
        "I create unique, memorable, versatile, professional, and timeless logos.",
    },
    {
      Service: "SEO",
      discretion:
        "I optimize websites for better visibility, traffic, rankings, engagement, and conversion.",
    },
  ];
  return (
    <div className="min-h-[calc(100dvh-100px)] w-full flex justify-center items-center flex-wrap">
      {services.map((service, index) => (
        <div key={service} className="w-full lg:w-6/12 p-5 lg:p-10 group">
          <div className="flex flex-col border-b-[1px] border-zinc-700 pb-2 gap-5 h-[250px]">
            <div className="w-full flex items-center justify-between">
              <span className="text-6xl group-hover:text-[var(--main-color)] transition-colors duration-300">
                {index < 9 ? `0${index + 1}` : index + 1}
              </span>
              <motion.span
                initial={{ rotate: 30 }}
                whileHover={{ rotate: 0, transition: { duration: 0.5 } }}
                className="w-[50px] h-[50px] rounded-[50%] bg-white flex items-center justify-center group-hover:bg-[var(--main-color)] transition-colors duration-300"
              >
                <IoIosArrowRoundForward className="text-black text-4xl" />
              </motion.span>
            </div>
            <h2 className="text-4xl text-white group-hover:text-[var(--main-color)] transition-colors duration-300">
              {service.Service}
            </h2>
            <p className="text-zinc-500">{service.discretion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
