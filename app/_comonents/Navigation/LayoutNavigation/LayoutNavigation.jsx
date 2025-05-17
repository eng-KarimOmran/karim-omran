"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
export default function LayoutNavigation() {
  const currentPath = usePathname();
  const pathHistoryRef = useRef([]);

  useEffect(() => {
    const history = pathHistoryRef.current;
    history.push(currentPath);
    if (history.length > 2) {
      history.shift();
    }
  }, [currentPath]);

  const getPathDepth = (path) => path?.split("/").length - 1;

  const currentDepth = getPathDepth(currentPath);
  const previousPath = pathHistoryRef.current[1];
  const previousDepth = getPathDepth(previousPath);
  if (currentDepth > 1 && (previousPath === undefined || previousDepth > 1)) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPath}
        className="fixed start-0 z-30 top-0 w-full flex overflow-hidden pointer-events-none"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: "100dvh" }}
            animate={{ height: 0 }}
            exit={{ height: "100dvh" }}
            transition={{ duration: 0.3, delay: i * 0.07 }}
            className="grow bg-zinc-100 -mx-1"
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
