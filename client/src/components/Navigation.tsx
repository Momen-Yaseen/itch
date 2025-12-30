import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Hash } from "lucide-react";

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
}

export function Navigation({ currentSlide, totalSlides, nextSlide, prevSlide }: NavigationProps) {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-6 pointer-events-none flex justify-center">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200/60 p-3 pointer-events-auto flex items-center gap-6 min-w-[320px] max-w-xl w-full">
        
        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-xl hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-slate-700"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex items-center font-mono text-sm font-medium text-slate-500 w-16 justify-center">
            {currentSlide + 1} / {totalSlides}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="p-2 rounded-xl hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-slate-700"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[hsl(196,46%,55%)] to-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "circOut" }}
          />
        </div>
      </div>
    </div>
  );
}
