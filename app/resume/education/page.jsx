import React from "react";
import LayoutResume from "@/app/_comonents/Resume/LayoutResume/LayoutResume";
import Education from "@/app/_comonents/Resume/Education/Education";

export default function EducationPage() {
  const data = {
    name: "Education",
    description:
      "Solid academic foundation in IT and web development, focused on real-world applications and continuous learning.",
    content: [
      {
        id: "0",
        date: "2025 - March",
        name: "Front-End developer",
        organized: "Route Academy",
        certificate: "certificateFront-endRoute.jpg",
      },
    ],
  };

  return (
    <LayoutResume
      data={data}
      contentComponent={<Education data={data.content} />}
    />
  );
}
