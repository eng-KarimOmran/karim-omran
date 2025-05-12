import React from "react";

export default function AboutMe({ data }) {
  const { content, name } = data;
  console.log(content);
  return content[0].id ? (
    <div className="w-full h-full flex justify-between p-0 flex-col md:flex-row gap-10 lg:gap-0 lg:p-5">
      <div className="h-full flex flex-col justify-around">
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Name:</span>
          <span className="text-white">{content[0].Name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Experience:</span>
          <span className="text-white">{content[0].Experience}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Country:</span>
          <span className="text-white">{content[0].Country}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">State:</span>
          <span className="text-white">{content[0].State}</span>
        </div>
      </div>
      <div className="h-full flex flex-col justify-around">
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Phone:</span>
          <span className="text-white">{content[0].Phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Email:</span>
          <span className="text-white">{content[0].Email}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Education:</span>
          <span className="text-white">{content[0].Education}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Languages:</span>
          <span className="text-white">{content[0].Languages[0]}</span>
          <span className="text-white">{content[0].Languages[1]}</span>
        </div>
      </div>
    </div>
  ) : null;
}
