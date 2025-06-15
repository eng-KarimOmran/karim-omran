import React from "react";
import Link from "next/link";

function NavLink({ link, activePath }) {
  const { path, content } = link;
  return (
    <li
      className={`hover:text-[var(--main-color)] transition-all duration-300 text-xl ${
        activePath ? "text-[var(--main-color)]" : null
      }`}
    >
      <Link href={path}>{content}</Link>
    </li>
  );
}

export default React.memo(NavLink);
