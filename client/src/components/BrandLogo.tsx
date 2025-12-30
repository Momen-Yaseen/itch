import { BrainCircuit } from "lucide-react";

export function BrandLogo() {
  return (
    <div className="flex items-center gap-2 text-primary font-display font-bold text-xl">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-primary/20">
        <BrainCircuit size={24} />
      </div>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
        Neurobotix
      </span>
    </div>
  );
}
