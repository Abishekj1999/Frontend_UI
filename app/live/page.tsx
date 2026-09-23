import { TopNav, BottomNav } from "../components/Nav";
import { Poster } from "../components/Poster";

const channels = ["News", "Sports", "Music", "Movies", "Kids", "Regional", "Entertainment"];
const liveNow = Array.from({ length: 12 }, (_, i) => ({
  channel: `Nila ${["News", "Cinemas", "Sports", "Music", "Kids", "Comedy"][i % 6]}`,
  show: ["Prime Debate", "Blockbuster Movie", "IPL Highlights", "Top Charts", "Cartoon Hour", "Stand-up Special"][i % 6],
  viewers: `${(i + 1) * 12.3}K`,
}));

const epg = Array.from({ length: 8 }, (_, i) => ({
  channel: `Channel ${i + 1}`,
  now: "Live Show",
  next: "Coming Up Next",
}));

export default function Live() {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopNav />
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-6">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">Live TV</h1>
          <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 bg-red-600 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE NOW
          </span>
        </div>

        <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-6">
          {["All", ...channels].map((c, i) => (
            <button key={c} className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${i === 0 ? "bg-nila text-white" : "bg-surface text-white/70"}`}>{c}</button>
          ))}
        </div>

        {/* Live grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {liveNow.map((l, i) => (
            <div key={i} className="rounded-xl overflow-hidden bg-surface hover:bg-surface-2 group cursor-pointer border border-white/5">
              <div className="relative aspect-video">
                <Poster title="" id={i * 5} ratio="landscape" />
                <span className="absolute top-2 left-2 text-[10px] font-bold bg-red-600 px-2 py-0.5 rounded flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" /> LIVE
                </span>
                <span className="absolute top-2 right-2 text-[10px] bg-black/60 px-2 py-0.5 rounded">👁 {l.viewers}</span>
              </div>
              <div className="p-3">
                <p className="text-xs text-nila-light font-semibold">{l.channel}</p>
                <p className="text-sm font-semibold truncate">{l.show}</p>
              </div>
            </div>
          ))}
        </div>

        {/* EPG - TV guide */}
        <h2 className="text-2xl font-bold mb-4">TV Guide</h2>
        <div className="rounded-xl bg-surface border border-white/5 overflow-hidden">
          <div className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] border-b border-white/5 text-xs text-white/50 p-3">
            <div>Channel</div>
            <div className="grid grid-cols-4 gap-2"><span>7:00 PM</span><span>8:00 PM</span><span>9:00 PM</span><span>10:00 PM</span></div>
          </div>
          {epg.map((e, i) => (
            <div key={i} className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] border-b border-white/5 p-3 items-center hover:bg-surface-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded nila-gradient" />
                <span className="text-sm font-medium">{e.channel}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-nila/25 border border-nila/50 rounded p-2 text-xs">
                  <p className="font-semibold truncate">{e.now}</p>
                  <p className="text-white/60 text-[10px]">Live</p>
                </div>
                <div className="bg-surface-2 rounded p-2 text-xs"><p className="truncate">{e.next}</p></div>
                <div className="bg-surface-2 rounded p-2 text-xs"><p className="truncate">Movie</p></div>
                <div className="bg-surface-2 rounded p-2 text-xs"><p className="truncate">News</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
