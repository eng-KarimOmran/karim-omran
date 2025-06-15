"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import NavLink from "./NavLink";
import BtnMenu from "./BtnMenu";

export default function ContentNav({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  return (
    <>
      <BtnMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <NavLinks menuOpen={menuOpen}>
        {links.map((link) => (
          <NavLink
            key={link.path}
            link={link}
            activePath={currentPath.split("/")[1] === link.path.split("/")[1]}
          />
        ))}
      </NavLinks>
    </>
  );
}
