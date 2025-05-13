import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Services() {
  const services = [
    {
      id:"01",
      Service: "Frontend Development",
      discretion: "I create responsive, clean, and modern front-end designs.",
    },
    {
      id:"02",
      Service: "Web Testing",
      discretion:
        "I ensure functionality, usability, performance, security, and compatibility.",
    },
    {
      id:"03",
      Service: "Logo Design",
      discretion:
        "I create unique, memorable, versatile, professional, and timeless logos.",
    },
    {
      id:"04",
      Service: "SEO",
      discretion:
        "I optimize websites for better visibility, traffic, rankings, engagement, and conversion.",
    },
  ];
  return (
    <div className="min-h-[calc(100dvh-100px)] w-full flex justify-center items-center flex-wrap fadeIn-content">
      {services.map((service) => (
        <div key={service.id} className="w-full lg:w-6/12 p-5 lg:p-9 group">
          <div className="flex flex-col border-b-[1px] border-zinc-700 pb-2 gap-5 h-[250px]">
            <div className="w-full flex items-center justify-between">
              <span className="text-6xl group-hover:text-[var(--main-color)] transition-colors duration-300">
                {service.id}
              </span>
              <span className="w-[50px] h-[50px] rounded-[50%] bg-white flex items-center justify-center group-hover:bg-[var(--main-color)] transition-all duration-500 transform hover:rotate-0 rotate-30">
                <IoIosArrowRoundForward className="text-black text-4xl transition-transform duration-500" />
              </span>
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
