"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export default function LayoutNavigation() {
  const path = usePathname();
  useEffect(() => {}, [path]);
  return (
    <div className="absolute start-0 z-30 top-0 w-full flex overflow-hidden">
      <AnimatePresence mode="wait">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`${i}-${path}`}
            initial={{ height: "100dvh" }}
            animate={{ height: 0 }}
            exit={{ height: "100dvh" }}
            transition={{ duration: 0.2, delay: 0.07 * i }}
            className="grow bg-zinc-100 -mx-1"
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
