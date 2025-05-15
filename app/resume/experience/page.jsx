import ContentResume from "@/app/_comonents/Resume/ContentResume/ContentResume";
import React from "react";
import EduExp from "@/app/_comonents/Resume/EduExp/EduExp";

export default function ExperiencePage() {
  const dataExperiences = [
    {
      id: "0",
      date: "2025 - May",
      name: "Front-End (Team Project)",
      organized: "Borg El Arab Technological University",
      certificate: null,
    },
  ];

  const dataPage = {
    name: "Experience",
    description:
      "Built responsive interfaces using React, Next.js, Tailwind. Ensured performance.",
  };

  return (
    <ContentResume
      dataPage={dataPage}
      children={<EduExp data={dataExperiences} />}
    />
  );
}
