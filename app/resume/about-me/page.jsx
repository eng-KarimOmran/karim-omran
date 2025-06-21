import React from "react";
import ContentResume from "../Components/ContentResume/ContentResume";
import ContentAboutMe from "./ContentAboutMe/ContentAboutMe";

export default function AboutMe() {
  const data = {
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
    <ContentResume dataPage={dataPage} children={<ContentAboutMe dataPage={dataPage} data={data} />} />
  );
}