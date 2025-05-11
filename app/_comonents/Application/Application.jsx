"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Application({ children }) {
  const path = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        key={path}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
