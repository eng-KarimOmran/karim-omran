import React from "react";
import ContentNav from "./Components/ContentNav";

export default function Navbar() {
  const links = [
    { path: "/", content: "Home" },
    { path: "/services", content: "Services" },
    { path: "/resume/education", content: "Resume" },
    { path: "/work/ai-lap", content: "Work" },
    { path: "/sent-me", content: "Sent me" },
  ];

  return (
    <nav className="py-5 w-full z-10">
      <div className="container flex justify-between items-center">
        <a
          className="flex items-center text-4xl font-semibold text-zinc-300"
          href={"/"}
        >
          <span className="font-bold">Karim</span>
          <span className="text-[var(--main-color)]">.</span>
        </a>
        <ContentNav links={links} />
      </div>
    </nav>
  );
}
