import React from "react";
import Image from "next/image";

export default function MyPhoto() {
  return (
    <div className="relative w-[250px] h-[250px] md:h-[300px] md:w-[300px] lg:w-[350px] lg:h-[350px] overflow-hidden my-3 imgHome rounded-2xl hover:scale-105 transition-all duration-500">
      <Image
        src="/Img/homePage.png"
        alt="front end develope"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  );
}
