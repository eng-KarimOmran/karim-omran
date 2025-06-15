import React from "react";
import ContentEduExp from "../Comonents/ContentEduExp/ContentEduExp";
import ContentResume from "../../Components/ContentResume/ContentResume";

export default function Experience() {
  const data = [
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
    <ContentResume dataPage={dataPage} children={<ContentEduExp dataPage={dataPage} data={data} />} />
  );
}