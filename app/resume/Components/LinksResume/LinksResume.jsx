"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function LinksResume() {
  const path = usePathname()

  const Sections = [
    { path: "/resume/education", name: "Education" },
    { path: "/resume/experience", name: "Experience" },
    { path: "/resume/skills", name: "Skills" },
    { path: "/resume/about-me", name: "About me" },
  ];

  return Sections.map((section) => (
    <Link
      href={section.path}
      key={section.path}
      className={`w-[250px] h-[40px] flex justify-center items-center mx-auto rounded-lg hover:bg-[var(--main-color)] transition-all group ${path === section.path ? "bg-[var(--main-color)] text-black" : "bg-zinc-800"}`}
    >
      <span className="text-xl group-hover:text-black">{section.name}</span>
    </Link>
  ));
}
