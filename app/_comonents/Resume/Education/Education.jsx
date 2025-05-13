"use client";

import React, { useState } from "react";
import { TbCertificate } from "react-icons/tb";

export default function Education({ data }) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOpen = (certificate) => setSelectedCertificate(certificate);

  const handleClose = (e) => {
    if (e.target.tagName === "DIV") {
      setSelectedCertificate(null);
    }
  };

  return (
    <>
      {data.map((course) => (
        <div key={course.id} className="p-5 w-full lg:w-6/12 h-6/12">
          <div className="bg-zinc-800 w-full h-full p-3 flex flex-col justify-between">
            <span className="text-[var(--main-color)]">{course.date}</span>
            <div className="flex justify-between items-center">
              <h2 className="text-white text-2xl">{course.name}</h2>
              {course.certificate && (
                <span
                  onClick={() => handleOpen(course.certificate)}
                  className="hover:text-[var(--main-color)] transition-all duration-300 text-2xl cursor-pointer"
                >
                  <TbCertificate />
                </span>
              )}
            </div>
            <p>
              <span className="text-[var(--main-color)]">. </span>
              {course.organized}
            </p>
          </div>
        </div>
      ))}

      {selectedCertificate && (
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-black/70 z-20 flex justify-center items-center overflow-hidden"
        >
          <img
            className="max-h-[80%] px-3"
            src={`/Certificates/${selectedCertificate}`}
            alt={selectedCertificate}
          />
        </div>
      )}
    </>
  );
}
