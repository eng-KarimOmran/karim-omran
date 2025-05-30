import React from "react";

export default function layout({ children }) {
  return (
    <section className="min-h-[calc(100dvh-100px)] flex flex-col items-center justify-center fadeIn-content">
      {children}
    </section>
  );
}
