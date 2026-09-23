const palettes = [
  ["#E6578A", "#7c2244"], ["#4a5cf8", "#1e2a7a"], ["#f59e0b", "#78350f"],
  ["#10b981", "#064e3b"], ["#ef4444", "#7f1d1d"], ["#a855f7", "#4c1d95"],
  ["#06b6d4", "#164e63"], ["#f43f5e", "#881337"], ["#84cc16", "#365314"],
];

export function Poster({ title, id, ratio = "portrait", badge }: { title: string; id: number; ratio?: "portrait" | "landscape" | "square" | "vertical"; badge?: string }) {
  const [c1, c2] = palettes[id % palettes.length];
  const aspect = ratio === "portrait" ? "aspect-[2/3]" : ratio === "landscape" ? "aspect-video" : ratio === "vertical" ? "aspect-[9/16]" : "aspect-square";
  return (
    <div className={`relative ${aspect} rounded-xl overflow-hidden group cursor-pointer`}>
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)` }} />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3), transparent 50%)" }} />
      {badge && (
        <span className="absolute top-2 left-2 text-[10px] font-bold bg-nila px-2 py-0.5 rounded-md">{badge}</span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-3 poster-gradient">
        <p className="font-semibold text-sm line-clamp-2">{title}</p>
      </div>
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-nila flex items-center justify-center nila-glow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
    </div>
  );
}
