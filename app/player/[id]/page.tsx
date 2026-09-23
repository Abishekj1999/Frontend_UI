import Link from "next/link";

export default function Player() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      {/* Video surface */}
      <div className="absolute inset-0 nila-gradient opacity-70" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, black 90%)" }} />

      {/* Top bar */}
      <div className="absolute top-0 inset-x-0 p-4 md:p-6 flex items-center justify-between z-10 bg-gradient-to-b from-black/70 to-transparent">
        <div className="flex items-center gap-3">
          <Link href="/details/1" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">←</Link>
          <div>
            <p className="font-semibold text-sm md:text-base">The Midnight Shore</p>
            <p className="text-xs text-white/60">S1 · E1 · The Beginning</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-white/10 text-xs">CC</button>
          <button className="px-3 py-1.5 rounded-lg bg-white/10 text-xs">⚙ 1080p</button>
          <button className="px-3 py-1.5 rounded-lg bg-white/10 text-xs hidden md:block">↗ Cast</button>
          <button className="w-10 h-10 rounded-full bg-white/10">⋯</button>
        </div>
      </div>

      {/* Center play controls */}
      <div className="relative z-10 flex items-center gap-10">
        <button className="w-14 h-14 rounded-full bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M11 19l-9-7 9-7v14zm2-14l9 7-9 7V5z"/></svg>
        </button>
        <button className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="black"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>
        </button>
        <button className="w-14 h-14 rounded-full bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M13 5l9 7-9 7V5zM2 5l9 7-9 7V5z"/></svg>
        </button>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 z-10 bg-gradient-to-t from-black/90 to-transparent">
        {/* Progress */}
        <div className="mb-3">
          <div className="relative h-1 bg-white/20 rounded-full">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-nila rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-3.5 h-3.5 bg-nila rounded-full nila-glow" />
          </div>
          <div className="flex justify-between text-xs text-white/70 mt-1.5">
            <span>28:14</span><span>1:54:22</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button>◀◀ 10s</button>
            <button>▶</button>
            <button>10s ▶▶</button>
            <div className="hidden md:flex items-center gap-2 ml-2">
              <span>🔊</span>
              <div className="w-20 h-1 bg-white/20 rounded-full"><div className="w-2/3 h-full bg-white rounded-full" /></div>
            </div>
            <span className="text-xs text-white/70 hidden md:inline">Next: E2 · Shadows</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <button>1x</button>
            <button className="hidden md:inline">PiP</button>
            <button>⛶</button>
          </div>
        </div>
      </div>
    </div>
  );
}
