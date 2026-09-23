const palettes = [
  ["#E6578A", "#7a1e46"], ["#4a5cf8", "#1e2a7a"], ["#f59e0b", "#78350f"],
  ["#10b981", "#064e3b"], ["#ef4444", "#7f1d1d"], ["#a855f7", "#4c1d95"],
  ["#06b6d4", "#164e63"], ["#f43f5e", "#881337"], ["#8b5cf6", "#3c1e5e"],
  ["#ec4899", "#701a3f"], ["#14b8a6", "#134e4a"], ["#f97316", "#7c2d12"],
];

export function Poster({ title, id, ratio = "portrait", badge, progress }: {
  title?: string; id: number; ratio?: "portrait" | "landscape" | "square" | "vertical";
  badge?: string; progress?: number;
}) {
  const [c1, c2] = palettes[id % palettes.length];
  const aspect = ratio === "portrait" ? "aspect-[2/3]" : ratio === "landscape" ? "aspect-video" : ratio === "vertical" ? "aspect-[9/16]" : "aspect-square";
  return (
    <div className={`relative ${aspect} rounded-xl overflow-hidden group cursor-pointer bg-surface`}>
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)` }} />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 55%)" }} />
      <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 70% 80%, rgba(0,0,0,0.5), transparent 50%)" }} />
      {badge && (
        <span className="absolute top-2 left-2 text-[9px] font-mono font-bold bg-nila px-1.5 py-0.5 rounded tracking-wider">{badge}</span>
      )}
      {title && (
        <div className="absolute inset-x-0 bottom-0 p-2.5 poster-gradient">
          <p className="font-display font-semibold text-xs md:text-sm line-clamp-2">{title}</p>
        </div>
      )}
      {progress !== undefined && (
        <div className="absolute inset-x-2 bottom-2 h-0.5 bg-black/50 rounded-full overflow-hidden">
          <div className="h-full bg-nila" style={{ width: `${progress}%` }} />
        </div>
      )}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="black"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
    </div>
  );
}
