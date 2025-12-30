import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  direction: number;
  slideKey: number;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
};

export function SlideLayout({ children, direction, slideKey }: SlideLayoutProps) {
  return (
    <AnimatePresence initial={false} custom={direction} mode="wait">
      <motion.div
        key={slideKey}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.4 },
          scale: { duration: 0.4 },
        }}
        className="absolute inset-0 w-full h-full flex flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
