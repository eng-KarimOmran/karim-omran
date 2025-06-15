import React from "react";
import ContentResume from "../../Components/ContentResume/ContentResume";
import ContentEduExp from "../Comonents/ContentEduExp/ContentEduExp";

export default function Education() {
  const data = [
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
    <ContentResume dataPage={dataPage} children={<ContentEduExp dataPage={dataPage} data={data} />} />
  );
}
