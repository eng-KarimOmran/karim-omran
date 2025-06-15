import React from "react";

export default function NavLinks({ children, menuOpen }) {
  const menuClass = `
      fixed top-[80px] start-0 bottom-0 z-10
      flex flex-col items-center gap-5
      bg-zinc-900 lg:bg-transparent
      lg:static lg:w-auto lg:flex-row
      overflow-hidden transition-all duration-200
      ${menuOpen ? "end-0" : "end-full"}
    `;
  return <ul className={menuClass}>{children}</ul>;
}
