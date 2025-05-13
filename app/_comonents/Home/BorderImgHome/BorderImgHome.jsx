"use client";
import { motion } from "framer-motion";
import React from "react";

export default function BorderImgHome() {
  return (
    <motion.div
      initial={{
        rotate: 0,
        background: `conic-gradient(from 0deg, var(--main-color), #18181B, #18181B, #18181B, var(--main-color))`,
      }}
      animate={{
        rotate: 360,
        background: `conic-gradient(from 0deg, var(--main-color), #18181B, #18181B, #18181B, var(--main-color))`,
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
      className="absolute -inset-1 -z-10 rounded-[50%] blur-xs"
    ></motion.div>
  );
}
