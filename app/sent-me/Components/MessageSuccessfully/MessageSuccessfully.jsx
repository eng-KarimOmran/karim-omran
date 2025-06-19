import React from "react";
import { SlCheck } from "react-icons/sl";
import Link from "next/link";

export default function MessageSuccessfully({
  isSuccessfully,
  setIsSuccessfully,
}) {
  return isSuccessfully ? (
    <div className="fixed inset-0 bg-[#18181B]/70 flex justify-center items-center fadeIn-content-Min">
      <div className="bg-zinc-50 w-[600px] h-[400px] flex justify-center items-center flex-col gap-5">
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
          <button onClick={()=>{setIsSuccessfully(false)}} className="border-2 border-gray-500 text-gray-400 px-6 py-2 rounded-3xl hover:scale-110 transition-all duration-300">
            closs
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
