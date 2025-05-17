import AboutMe from "@/app/_comonents/Resume/AboutMe/AboutMe";
import ContentResume from "@/app/_comonents/Resume/ContentResume/ContentResume";
import React from "react";

export default function AboutMePage() {
  const dataAbout = {
    id: "0",
    Name: "Karim Omran",
    Experience: "+1 Year",
    Country: "Egypt",
    State: "Alexandria",
    Phone: "(+20) 1277913201",
    Email: "eng.karimomran@gmail.com",
    Languages: ["Arabic,", "English"],
    Education: "Diploma in IT",
  };

  const dataPage = {
    name: "About me",
    description:
      "Front-End Developer passionate about building clean, responsive, and modern web interfaces.",
  };
  return (
    <ContentResume
      dataPage={dataPage}
      children={<AboutMe data={dataAbout} />}
    />
  );
}
