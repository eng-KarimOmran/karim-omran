"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TbCertificate } from "react-icons/tb";

export default function ButCertificate({ Img }) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const handleOpen = (certificate) => setSelectedCertificate(certificate);

  const handleClose = (e) => {
    if (e.target.tagName === "DIV") {
      setSelectedCertificate(null);
    }
  };

  return (
    <>
      <button
        onClick={() => handleOpen(Img)}
        className="hover:text-[var(--main-color)] transition-all duration-300 text-2xl cursor-pointer"
      >
        <TbCertificate />
      </button>
      {selectedCertificate && (
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-black/70 z-20 flex justify-center items-center overflow-hidden"
        >
          <Image
            src={`/Certificates/${selectedCertificate}`}
            alt={selectedCertificate}
            className="max-h-[80%] px-3 object-contain"
            width={595}
            height={842}
          />
        </div>
      )}
    </>
  );
}
