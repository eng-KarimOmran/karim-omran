import React from "react";
import Image from "next/image";
import BorderImgHome from "../BorderImgHome/BorderImgHome";

export default function ImgHome() {
  return (
    <div className="relative w-[250px] h-[250px] md:h-[300px] md:w-[300px] lg:w-[350px] lg:h-[350px] flex items-center justify-center my-2 fadeIn">
      <Image
        src="/Img/karim.jpg"
        alt="karim"
        fill
        className="w-full h-full object-cover object-center rounded-[50%]"
        priority
      />
      <BorderImgHome />
    </div>
  );
}