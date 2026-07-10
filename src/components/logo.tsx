import Image from "next/image";
import clsx from "clsx";

type LogoProps = {
  className?: string;
  compact?: boolean;
  priority?: boolean;
};

export function Logo({ className, compact = false, priority = false }: LogoProps) {
  return (
    <div
      className={clsx(
        "inline-flex items-center rounded-[1.2rem] border border-white/15 bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.28)]",
        compact ? "px-2.5 py-1.5" : "px-4 py-3",
        className
      )}
    >
      <Image
        src="/mrm-logo.png"
        alt="MRM Magallanes ROV Marine"
        width={676}
        height={406}
        priority={priority}
        className={clsx("h-auto object-contain", compact ? "w-[6.8rem] sm:w-[7.8rem]" : "w-[15rem] sm:w-[19rem]")}
      />
    </div>
  );
}
