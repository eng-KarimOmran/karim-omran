import React from "react";

export default function Experience({ data }) {
  const { content, name } = data;
  return (
    <div className="p-5 w-full lg:w-6/12 h-6/12">
      {content[0].id ? (
        content.map((experience) => (
          <div
            key={experience.id}
            className="bg-zinc-800 w-full h-full p-3 flex flex-col justify-between"
          >
            <span className="text-[var(--main-color)]">{experience.date}</span>
            <h2 className="text-white text-2xl">{experience.experience}</h2>
            <p>
              <span className="text-[var(--main-color)]">. </span>
              {experience.side}
            </p>
          </div>
        ))
      ) : (
        <div className="text-3xl text-center">No {name}</div>
      )}
    </div>
  );
}
