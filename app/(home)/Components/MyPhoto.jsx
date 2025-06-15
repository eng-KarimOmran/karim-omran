import React from "react";
import Image from "next/image";

export default function MyPhoto() {
  return (
    <div className="relative border-2 border-[var(--main-color)] w-[250px] h-[250px] md:h-[300px] md:w-[300px] lg:w-[350px] lg:h-[350px] overflow-hidden rounded-tl-4xl my-3 imgHome">
      <Image
        src="/Img/karim.jpg"
        alt="karim"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  );
}
