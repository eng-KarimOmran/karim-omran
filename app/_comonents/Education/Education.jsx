import React, { useState } from "react";
import { TbCertificate } from "react-icons/tb";

export default function Education({ data }) {
  const { content, name } = data;
  const [disPlayCertificate, setDisPlayCertificate] = useState(false);

  return content.length > 0 ? (
    content.map((training) => (
      <div className="p-5 w-full lg:w-6/12 h-6/12">
        <div
          key={training.id}
          className="bg-zinc-800 w-full h-full p-3 flex flex-col justify-between"
        >
          <span className="text-[var(--main-color)]">{training.date}</span>
          <div className="flex justify-between items-center">
            <h2 className="text-white text-2xl">{training.name}</h2>
            {training.certificate ? (
              <span
                onClick={() => {
                  setDisPlayCertificate(true);
                }}
                className="hover:text-[var(--main-color)] transition-all duration-300 text-2xl cursor-pointer"
              >
                <TbCertificate />
              </span>
            ) : null}
          </div>
          <p>
            <span className="text-[var(--main-color)]">. </span>
            {training.organized}
          </p>
          <div
            onClick={(e) => {
              if (e.target.tagName === "DIV") {
                setDisPlayCertificate(false);
              }
            }}
            className={`${
              disPlayCertificate ? "fixed" : "hidden"
            } inset-0 bg-black/70 z-20 flex justify-center items-center overflow-hidden`}
          >
            <img
              className="max-h-[80%] px-3"
              src={`Certificates/${training.certificate}`}
              alt={training.certificate}
            />
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="text-3xl text-center">No {name}</div>
  );
}
