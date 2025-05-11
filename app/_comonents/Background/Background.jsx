"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Application from "../Application/Application";
import { AnimatePresence, motion } from "framer-motion";

export default function Background({ children }) {
  const rectangles = [1, 2, 3, 4, 5];
  const path = usePathname();

  return (
    <div className="w-full text-zinc-300">
      <Application>
        <div className="container">{children}</div>
      </Application>
      <div className="absolute top-0 w-full flex overflow-hidden">
        <AnimatePresence mode="wait">
          {rectangles.map((rectangle) => (
            <motion.div
              key={`${rectangle}-${path}`}
              initial={{ height: "100dvh" }}
              animate={{ height: 0 }}
              exit={{ height: "100dvh" }}
              transition={{ duration: 0.2, delay: 0.09 * rectangle }}
              className="top-0 grow bg-zinc-100 -mx-1"
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
