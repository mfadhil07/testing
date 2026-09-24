import { motion } from "framer-motion";

interface StoryProgressProps {
  current: number;
  total: number;
}

function StoryProgress({ current, total }: StoryProgressProps) {
  return (
    <div className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
      <span className="mb-2 font-mono text-[10px] font-semibold text-[#211a2e]/50">
        {String(current).padStart(2, "0")}
      </span>

      <div className="flex flex-col gap-2">
        {Array.from({ length: total }).map((_, index) => {
          const active = index + 1 === current;

          return (
            <div
              key={index}
              className="relative flex h-4 w-1 items-center justify-center"
            >
              <motion.div
                animate={{
                  height: active ? 16 : 4,
                  opacity: active ? 1 : 0.3,
                }}
                transition={{ duration: 0.2 }}
                className={`w-1 rounded-full ${
                  active ? "bg-[#d9789a]" : "bg-[#211a2e]"
                }`}
              />
            </div>
          );
        })}
      </div>

      <span className="mt-2 font-mono text-[10px] font-semibold text-[#211a2e]/50">
        {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}

export default StoryProgress;
