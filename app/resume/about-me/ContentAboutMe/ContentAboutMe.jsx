import React from "react";
import NoData from "../../Components/NoData/NoData";
export default function ContentAboutMe({ data, dataPage }) {
  if (data.length === 0) {
    return <NoData page={dataPage.name} />;
  }
  const {
    Name,
    Experience,
    Country,
    State,
    Phone,
    Email,
    Languages,
    Education,
  } = data;
  return (
    <div className="w-full h-full flex justify-between p-0 flex-col md:flex-row gap-10 lg:gap-0 lg:p-5">
      <div className="h-full flex flex-col justify-around">
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Name:</span>
          <span className="text-white">{Name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Experience:</span>
          <span className="text-white">{Experience}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Country:</span>
          <span className="text-white">{Country}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">State:</span>
          <span className="text-white">{State}</span>
        </div>
      </div>
      <div className="h-full flex flex-col justify-around">
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Phone:</span>
          <span className="text-white">{Phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Email:</span>
          <span className="text-white">{Email}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Education:</span>
          <span className="text-white">{Education}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Languages:</span>
          {Languages.map((language) => (
            <span key={language} className="text-white">
              {language}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
