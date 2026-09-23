import { TopNav, BottomNav } from "../components/Nav";
import { Poster } from "../components/Poster";

const items = [
  { title: "Vikram", size: "1.2 GB", status: "Downloaded", progress: 100 },
  { title: "Family Man S2 · E5", size: "480 MB", status: "Downloading", progress: 62 },
  { title: "The Midnight Shore", size: "2.1 GB", status: "Paused", progress: 30 },
  { title: "Suzhal · E3", size: "520 MB", status: "Queued", progress: 0 },
];

export default function Downloads() {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopNav />
      <div className="max-w-4xl mx-auto px-4 md:px-12 py-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Downloads</h1>
        <p className="text-white/60 text-sm mb-6">Watch offline · 4.3 GB used of 20 GB</p>

        <div className="w-full h-1.5 rounded-full bg-white/10 mb-8">
          <div className="h-full w-[22%] rounded-full nila-gradient" />
        </div>

        <div className="space-y-3">
          {items.map((it, i) => (
            <div key={i} className="p-3 rounded-xl bg-surface border border-white/5 flex gap-3 items-center">
              <div className="w-16 md:w-20 shrink-0">
                <Poster title="" id={i * 6} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">{it.title}</p>
                <p className="text-xs text-white/50 mb-2">{it.size} · {it.status}</p>
                {it.progress < 100 && (
                  <div className="w-full h-1 bg-white/10 rounded-full">
                    <div className="h-full bg-nila rounded-full" style={{ width: `${it.progress}%` }} />
                  </div>
                )}
              </div>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10">
                {it.progress === 100 ? "▶" : it.status === "Paused" ? "▶" : "⏸"}
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10">×</button>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
