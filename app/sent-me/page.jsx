import React from "react";
import Form from "../_comonents/SentMe/Form/Form";

export default function SentMe() {
  return (
    <div className="w-full min-h-[calc(100dvh-100px)] fadeIn-content flex flex-col">
      <h2 className="text-5xl text-center text-white py-3">Sent Me</h2>
      <Form />
    </div>
  );
}
