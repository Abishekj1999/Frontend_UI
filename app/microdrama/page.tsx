import { BottomNav } from "../components/Nav";

export default function Microdrama() {
  return (
    <div className="min-h-screen bg-black">
      {/* Vertical feed simulation */}
      <div className="relative h-screen overflow-hidden flex items-center justify-center">
        {/* Video card */}
        <div className="relative w-full max-w-sm h-full md:h-[85vh] md:rounded-2xl overflow-hidden">
          <div className="absolute inset-0 nila-gradient" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.2), transparent 60%)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60" />

          {/* Top */}
          <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between z-10">
            <div className="flex gap-4 text-sm">
              <span className="font-bold border-b-2 border-nila pb-1">For You</span>
              <span className="text-white/60">Following</span>
              <span className="text-white/60">Trending</span>
            </div>
            <button className="text-white/80">🔍</button>
          </div>

          {/* Right actions */}
          <div className="absolute right-3 bottom-32 flex flex-col items-center gap-5 z-10">
            <div className="text-center">
              <div className="w-11 h-11 rounded-full nila-gradient border-2 border-white mb-1" />
              <div className="w-5 h-5 rounded-full bg-nila text-xs flex items-center justify-center -mt-2 mx-auto">+</div>
            </div>
            <button className="text-center">
              <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-xl">♥</div>
              <p className="text-[10px] mt-1">124.5K</p>
            </button>
            <button className="text-center">
              <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-xl">💬</div>
              <p className="text-[10px] mt-1">3.2K</p>
            </button>
            <button className="text-center">
              <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-xl">↗</div>
              <p className="text-[10px] mt-1">Share</p>
            </button>
            <button className="text-center">
              <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-xl">📺</div>
              <p className="text-[10px] mt-1">Series</p>
            </button>
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-24 inset-x-0 px-4 z-10 pr-20">
            <span className="text-xs font-bold bg-nila px-2 py-0.5 rounded inline-block mb-2">EP 12 · 90s</span>
            <h2 className="text-xl font-bold mb-1">CEO's Secret Bride</h2>
            <p className="text-sm text-white/85 line-clamp-2 mb-3">When she signs the contract, she doesn't know her new husband is the city's most feared billionaire...</p>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-1 bg-white/10 rounded-full">🔥 12.4M views</span>
              <span className="px-2 py-1 bg-white/10 rounded-full">60 episodes</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-20 inset-x-4 h-0.5 bg-white/20 z-10 rounded">
            <div className="h-full w-2/5 bg-nila rounded" />
          </div>

          {/* Episode chip */}
          <div className="absolute bottom-4 inset-x-4 flex items-center justify-between bg-black/60 backdrop-blur rounded-xl px-3 py-2.5 z-10">
            <div>
              <p className="text-xs font-semibold">Playlist · CEO's Secret Bride</p>
              <p className="text-[10px] text-white/60">Episode 12 of 60 · Unlock next for 20 coins</p>
            </div>
            <button className="px-3 py-1.5 rounded-lg bg-nila text-xs font-bold">Unlock</button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
