import React from "react";
import Image from "next/image";

export default function ImgHome() {
  return (
    <div className="relative w-[250px] h-[250px] md:h-[300px] md:w-[300px] lg:w-[350px] lg:h-[350px] flex items-center justify-center overflow-hidden rounded-3xl shadow-xl border-2 border-[var(--main-color)] imgHome my-3">
      <Image
        src="/Img/karim.jpg"
        alt="karim"
        fill
        className="w-full h-full object-cover object-center"
        priority
      />
    </div>
  );
}