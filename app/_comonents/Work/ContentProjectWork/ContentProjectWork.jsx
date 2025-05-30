"use client";
import useProjectData from "@/app/work/[project]/useProjectData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function ContentProjectWork() {
  const {
    name,
    description,
    technologies,
    gitHub,
    demo,
    img,
    projectNext,
    projectPrev,
  } = useProjectData();
  return (
    <div className="w-full flex justify-between items-center flex-col-reverse lg:flex-row fadeIn-content-Min">
      <div className="lg:w-1/2 w-full p-5InformationProject flex flex-col gap-5 items-center lg:items-start">
        <h2 className="text-white text-3xl md:text-6xl">{name}</h2>
        <p>{description}</p>
        <div className="text-[var(--main-color)]">{technologies}</div>
        <div className="pt-5 flex gap-5 items-center">
          <a target="_blank" href={gitHub} rel="noopener noreferrer">
            <div className="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] bg-zinc-700 hover:scale-[1.1] transition-all duration-300">
              <Image
                src="/Icon/logo-github.gif"
                className="w-[100%]"
                alt="github"
                width={50}
                height={50}
                priority
              />
            </div>
          </a>
          <a target="_blank" href={demo} rel="noopener noreferrer">
            <div className="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] bg-zinc-700 hover:scale-[1.1] transition-all duration-300 p-1">
              <Image
                src="/Icon/logo-eye.gif"
                className="w-[100%]"
                alt="eye"
                width={50}
                height={50}
                priority
              />
            </div>
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 w-full p-5 relative">
        <Image
          src={`/Img/Projects/${img}`}
          className="object-contain object-center"
          alt={"Ai-lap"}
          width={800}
          height={300}
          priority
        />
        <div className="absolute inset-0 flex justify-between items-center text-4xl p-5">
          <Link href={`/work/${projectPrev}`}>
            <div className="py-5 pe-5">
              <IoIosArrowBack />
            </div>
          </Link>
          <Link href={`/work/${projectNext}`}>
            <div className="py-5 ps-5">
              <IoIosArrowForward />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
