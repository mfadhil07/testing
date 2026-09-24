interface StoryCounterProps {
  number: number;
}

function StoryCounter({ number }: StoryCounterProps) {
  return (
    <div className="absolute bottom-7 left-5 z-20 flex items-center gap-3 sm:left-8">
      <span className="font-mono text-xs font-semibold text-[#211a2e]/50">
        {String(number).padStart(2, "0")}
      </span>

      <div className="h-px w-10 bg-[#211a2e]/20" />

      <span className="text-[10px] uppercase tracking-[0.25em] text-[#211a2e]/40">
        Ayu · 27
      </span>
    </div>
  );
}

export default StoryCounter;
