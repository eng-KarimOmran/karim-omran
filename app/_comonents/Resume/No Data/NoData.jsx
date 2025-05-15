import React from "react";

export default function NoData({ page }) {
  return (
    <div className="w-full h-full flex justify-center items-center text-3xl">
      No {page}
    </div>
  );
}
