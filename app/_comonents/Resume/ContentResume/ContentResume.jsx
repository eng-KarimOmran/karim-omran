import React from "react";

export default function ContentResume({dataPage , children}) {
  
  const {name , description} = dataPage;

  return (
    <>
      <h2 className="text-3xl text-white">{name}</h2>
      <p className="max-w-[500px] px-2 text-center">
        {description}
      </p>
      <div className="h-[400px] w-full px-1 lg:w-[800px] lg:overflow-y-scroll flex flex-wrap items-center justify-center fadeIn-content">
        {
          children
        }
      </div>
    </>
  );
}
