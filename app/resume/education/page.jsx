import React from "react";
import ContentResume from "@/app/_comonents/Resume/ContentResume/ContentResume";
import EduExp from "@/app/_comonents/Resume/EduExp/EduExp";

export default function EducationPage() {
  const dataEducation = [
    {
      id: "0",
      date: "2025 - March",
      name: "Front-End developer",
      organized: "Route Academy",
      certificate: "certificateFront-endRoute.jpg",
    },
  ];
  const dataPage = {
    name: "Education",
    description:
      "Solid academic foundation in IT and web development, focused on real-world applications and continuous learning.",
  };

  return (
    <ContentResume
      dataPage={dataPage}
      children={<EduExp data={dataEducation} />}
    />
  );
}
