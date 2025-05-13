import AboutMe from "@/app/_comonents/Resume/AboutMe/AboutMe";
import LayoutResume from "@/app/_comonents/Resume/LayoutResume/LayoutResume";
import React from "react";

export default function AboutMePage() {
  const data = {
    name: "About me",
    description:
      "Front-End Developer passionate about building clean, responsive, and modern web interfaces.",
    content:[
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
    }
    ]
  };
  return <LayoutResume
        data={data}
        contentComponent={<AboutMe data={data.content} />}
      />
}
