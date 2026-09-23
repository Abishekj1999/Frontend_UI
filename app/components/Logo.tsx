export function Logo({ size = 32, showText = true }: { size?: number; showText?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="rounded-xl nila-gradient nila-glow flex items-center justify-center font-display font-bold text-white"
        style={{ width: size, height: size, fontSize: size * 0.5 }}
      >
        N
      </div>
      {showText && (
        <span className="font-display font-bold text-lg tracking-tight">
          Nila<span className="text-nila">OTT</span>
        </span>
      )}
    </div>
  );
}
