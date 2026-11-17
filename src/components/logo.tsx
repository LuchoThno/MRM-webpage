import Image from "next/image";
import clsx from "clsx";

type LogoProps = {
  className?: string;
  compact?: boolean;
  priority?: boolean;
};

/**
 * Light version of the MRM logo (white + gold on transparent), made for the
 * site's dark backgrounds. The original artwork lives in /public/mrm-logo.png.
 */
export function Logo({ className, compact = false, priority = false }: LogoProps) {
  return (
    <Image
      src="/mrm-logo-light.png"
      alt="MRM Magallanes ROV Marine"
      width={595}
      height={302}
      priority={priority}
      className={clsx(
        "h-auto object-contain drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]",
        compact ? "w-[7.5rem] sm:w-[8.75rem]" : "w-[13rem] sm:w-[15rem]",
        className
      )}
    />
  );
}
