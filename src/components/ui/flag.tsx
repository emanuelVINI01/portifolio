import Image from "next/image";

export type FlagCode = "br" | "us" | "de";

export const LOCALE_FLAG: Record<string, FlagCode> = {
  en: "us",
  pt: "br",
  de: "de",
};

const FLAG_LABEL: Record<FlagCode, string> = {
  br: "Brasil",
  us: "United States",
  de: "Deutschland",
};

type Props = {
  code: FlagCode;
  size?: number;
  label?: string;
  className?: string;
};

export function Flag({ code, size = 18, label, className = "" }: Props) {
  return (
    <span
      className={`inline-block shrink-0 overflow-hidden rounded-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-110 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={`/flags/${code}.svg`}
        alt={label ?? FLAG_LABEL[code]}
        width={size}
        height={size}
        unoptimized
        className="h-full w-full object-cover"
      />
    </span>
  );
}
