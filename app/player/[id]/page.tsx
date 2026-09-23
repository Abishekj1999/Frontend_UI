import Link from "next/link";
import { Icon } from "../../components/Icon";

export default function Player() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      {/* Video surface */}
      <div className="absolute inset-0 nila-gradient opacity-70" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 40%, transparent 20%, rgba(0,0,0,0.85) 90%)" }} />

      {/* Top bar */}
      <div className="absolute top-0 inset-x-0 p-4 md:p-6 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3">
          <Link href="/details/1" className="w-10 h-10 rounded-full glass flex items-center justify-center"><Icon name="back" /></Link>
          <div>
            <p className="font-display font-bold text-sm md:text-lg">The Midnight Shore</p>
            <p className="text-xs text-white/60">S1 · E1 · The Beginning</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-lg glass text-xs flex items-center gap-1.5"><Icon name="cc" size={14} /> EN</button>
          <button className="px-3 py-1.5 rounded-lg glass text-xs flex items-center gap-1.5"><Icon name="settings" size={14} /> 4K</button>
          <button className="w-10 h-10 rounded-full glass hidden md:flex items-center justify-center"><Icon name="cast" size={16} /></button>
        </div>
      </div>

      {/* Center play controls */}
      <div className="relative z-10 flex items-center gap-8 md:gap-12">
        <button className="w-14 h-14 rounded-full glass flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M11 19l-9-7 9-7v14zm2-14l9 7-9 7V5z"/></svg>
        </button>
        <button className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="black"><path d="M8 5v14l11-7z"/></svg>
        </button>
        <button className="w-14 h-14 rounded-full glass flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M13 5l9 7-9 7V5zM2 5l9 7-9 7V5z"/></svg>
        </button>
      </div>

      {/* Side actions (portrait suggestion) */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-3">
        <button className="w-11 h-11 rounded-full glass flex items-center justify-center"><Icon name="plus" /></button>
        <button className="w-11 h-11 rounded-full glass flex items-center justify-center"><Icon name="heart" /></button>
        <button className="w-11 h-11 rounded-full glass flex items-center justify-center"><Icon name="share" /></button>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 z-10 bg-gradient-to-t from-black/95 to-transparent">
        {/* Progress */}
        <div className="mb-4">
          <div className="relative h-1 bg-white/20 rounded-full group cursor-pointer">
            <div className="absolute inset-y-0 left-0 w-[35%] bg-nila rounded-full" />
            <div className="absolute inset-y-0 left-[35%] w-[8%] bg-white/40 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 left-[35%] w-4 h-4 -translate-x-1/2 bg-nila rounded-full nila-glow" />
          </div>
          <div className="flex justify-between font-mono text-xs text-white/70 mt-2">
            <span>28:14</span><span>1:54:22</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4 text-sm">
            <button className="flex items-center gap-1.5 text-white/85"><span className="font-mono text-xs">10s</span><Icon name="back" size={16} /></button>
            <button className="flex items-center gap-1.5 text-white/85"><Icon name="chev" size={16} /><span className="font-mono text-xs">10s</span></button>
            <div className="hidden md:flex items-center gap-2 ml-2">
              <Icon name="volume" size={16} />
              <div className="w-20 h-1 bg-white/20 rounded-full"><div className="w-2/3 h-full bg-white rounded-full" /></div>
            </div>
            <span className="text-xs text-white/70 hidden md:inline ml-3">Next: E2 · Shadows in 24s</span>
          </div>
          <div className="flex items-center gap-3 md:gap-4 text-sm">
            <button className="font-mono text-xs bg-white/10 px-2 py-1 rounded">1.0×</button>
            <button className="hidden md:flex"><Icon name="pip" size={18} /></button>
            <button><Icon name="settings" size={18} /></button>
            <button className="text-white/85">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
