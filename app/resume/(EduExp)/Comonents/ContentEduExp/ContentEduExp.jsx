import React from "react";
import NoData from "@/app/resume/Components/NoData/NoData";
import ButCertificate from "../ButCertificate/ButCertificate";

export default function ContentEduExp({ data , dataPage }) {
  if (data.length === 0) {
    return <NoData page={dataPage.name} />;
  }
  return (
    <>
      {data.map((course) => (
        <div
          key={course.id}
          className="my-5 lg:my-0 lg:py-5 lg:px-5 w-full lg:w-6/12 h-4/12 md:h-6/12 lg:me-auto"
        >
          <div className="bg-zinc-800 w-full h-full p-2 flex flex-col justify-between">
            <span className="text-[var(--main-color)]">{course.date}</span>
            <div className="flex justify-between items-center">
              <h2 className="text-white md:text-2xl text-xl font-medium">
                {course.name}
              </h2>
              {course.certificate && (
                <ButCertificate imgName={course.certificate} />
              )}
            </div>
            <div className="flex gap-1 items-center">
              <span className="text-[var(--main-color)] text-lg">. </span>
              <span className="text-gray-300/80">{course.organized}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
