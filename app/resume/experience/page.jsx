import Experience from "@/app/_comonents/Resume/Experience/Experience";
import LayoutResume from "@/app/_comonents/Resume/LayoutResume/LayoutResume";
import React from "react";

export default function ExperiencePage() {
  const data = {
    name: "Experience",
    description:
      "Built responsive interfaces using React, Next.js, Tailwind. Ensured performance.",
    content: [{ id: null, date: null, experience: null, organized: null }],
  };

  return (
    <LayoutResume
      data={data}
      contentComponent={<Experience data={data.content} />}
    />
  );
}
