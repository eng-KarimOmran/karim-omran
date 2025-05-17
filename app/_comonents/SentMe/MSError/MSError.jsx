import React from "react";
import { MdError } from "react-icons/md";

export default function MSError({error}) {
  return (
    <div className="flex items-center text-red-500 bg-red-100 p-3 rounded-xl w-full">
      <MdError />
      <span>{error}</span>
    </div>
  );
}
