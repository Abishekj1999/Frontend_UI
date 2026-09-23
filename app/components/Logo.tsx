export function Logo({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <defs>
          <linearGradient id="nlg" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#ff7ba7" />
            <stop offset="100%" stopColor="#E6578A" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="18" fill="url(#nlg)" />
        <path d="M14 12 L14 28 L18 28 L18 20 L26 28 L26 12 L22 12 L22 20 L14 12 Z" fill="white" />
      </svg>
      <span className="font-bold text-lg tracking-tight">Nila<span className="text-nila">OTT</span></span>
    </div>
  );
}
