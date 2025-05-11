"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CiTextAlignLeft } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";

export default function Navbar() {
  const links = [
    { path: "/", content: "Home" },
    { path: "/services", content: "Services" },
    { path: "/resume", content: "Resume" },
    { path: "/work", content: "Work" },
  ];

  const path = usePathname();

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="py-5 w-full ">
      <div className="container flex justify-between items-center flex-wrap">
        <a
          className="flex items-center text-4xl font-semibold text-zinc-300"
          href={"/"}
        >
          <span className="font-bold">Karim</span>
          <span className="text-[var(--main-color)]">.</span>
        </a>

        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          className="static lg:hidden text-zinc-300 text-xl"
        >
          <CiTextAlignLeft />
        </button>

        <div
          className={`fixed z-10 start-0 overflow-hidden top-0 lg:static bg-zinc-900 lg:bg-transparent bottom-0 py-2 transition-all duration-300 ${
            toggle ? "end-0" : "end-full"
          }`}
        >
          <div className="py-3 flex justify-between items-center lg:hidden px-[32px]">
            <a
              className="flex items-center text-4xl font-semibold text-zinc-300"
              href={"/"}
            >
              <h1 className="font-bold">Karim</h1>
              <span className="text-[var(--main-color)]">.</span>
            </a>
            <button
              onClick={() => {
                setToggle(!toggle);
              }}
              className="text-zinc-300 text-xl"
            >
              <RiCloseLargeLine />
            </button>
          </div>
          <ul className="flex gap-5 justify-between items-center flex-col lg:flex-row text-xl">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  className={`hover:text-[var(--main-color)] transition-all duration-300 ${
                    link.path === path ? "text-[var(--main-color)]" : null
                  }`}
                  href={link.path}
                >
                  {link.content}
                </Link>
              </li>
            ))}
            <li className="p-2">
              <Link
                className={`px-5 py-0.5 hover:bg-[var(--main-color)] transition-all duration-300 text-white rounded-4xl ${path === "/sent-me" ? "bg-[var(--main-color)]" : "bg-[var(--main-color)]/70"}`}
                href={"/sent-me"}
              >
                Sent Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
