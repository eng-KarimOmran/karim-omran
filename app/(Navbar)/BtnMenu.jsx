"use client";
import React from "react";
import { CiTextAlignLeft } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";

export default function BtnMenu({menuOpen , setMenuOpen}) {
  return (
    <button
      onClick={() => {
        setMenuOpen(!menuOpen);
      }}
      className="block lg:hidden text-2xl p-3"
    >
      {menuOpen ? <RiCloseLargeLine /> : <CiTextAlignLeft />}
    </button>
  );
}
