import React from "react";
import { SlCheck } from "react-icons/sl";
import Link from "next/link";

export default function MessageSuccessfully({
  isSuccessfully,
  setIsSuccessfully,
}) {
  const ss = "";
  ss.split(" ");
  return isSuccessfully ? (
    <div
      onClick={(e) => {
        e.target.classList.contains("Overlay")
          ? setIsSuccessfully(false)
          : null;
      }}
      className="Overlay fixed inset-0 bg-[#18181B]/70 flex justify-center items-center fadeIn-content-Min"
    >
      <div className="bg-zinc-800 w-[95%] h-[300px] lg:h-[400px] rounded-2xl max-w-[600px] flex justify-center items-center flex-col gap-5">
        <SlCheck className="text-9xl text-green-500" />
        <div className="text-gray-400">
          Your message has been received successfully.
        </div>
        <div className="flex items-center gap-5">
          <Link
            href={"/"}
            className="border-2 border-gray-500 text-gray-400 px-6 py-2 rounded-3xl hover:scale-110 transition-all duration-300"
          >
            Go To Home
          </Link>
          <button
            onClick={() => {
              setIsSuccessfully(false);
            }}
            className="border-2 border-gray-500 text-gray-400 px-6 py-2 rounded-3xl hover:scale-110 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
