"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function LayoutNavigation() {
  const currentPath = usePathname();
  const previousPath = useRef(currentPath);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const from = previousPath.current;
    const to = currentPath;
    previousPath.current = to;

    if (from.split("/").length < 3 || from.split("/")[1] !== currentPath.split("/")[1]) {
      setShowAnimation(true);

      const timeout = setTimeout(() => {
        setShowAnimation(false);
      }, 600);

      return () => clearTimeout(timeout);
    }
  }, [currentPath]);

  return (
    <AnimatePresence mode="wait">
      {showAnimation && (
        <motion.div
          key={currentPath}
          className="fixed start-0 z-30 top-0 w-full flex overflow-hidden pointer-events-none"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: "100dvh" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="grow bg-zinc-100 -mx-1"
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}