"use client";
import React, { useState } from "react";
import { TbCertificate } from "react-icons/tb";

export default function ButCertificate({ imgName }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-[var(--main-color)] transition-all duration-300 text-2xl cursor-pointer"
      >
        <TbCertificate />
      </button>
      {isOpen ? (
        <divv
          onClick={(e) => {
            if (e.target.tagName === "DIVV") {
              setIsOpen(false);
            }
          }}
          className="fixed inset-0 bg-black/50 flex justify-center items-center"
        >
          <img
            src={`/Certificates/${imgName}`}
            alt={imgName}
            className="w-[calc(30px*10)] h-[calc(30px*7)] md:w-[calc(45px*10)] md:h-[calc(45px*7)] lg:w-[calc(60px*10)] lg:h-[calc(60px*7)] bg-white"
          />
        </divv>
      ) : null}
    </>
  );
}
