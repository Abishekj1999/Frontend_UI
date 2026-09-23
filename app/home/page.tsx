import Link from "next/link";
import { TopNav, BottomNav } from "../components/Nav";
import { Row } from "../components/Row";
import { Poster } from "../components/Poster";

const trending = [
  { title: "The Midnight Shore", badge: "HOT" }, { title: "Chennai Express 2" }, { title: "Neon Dreams", badge: "NEW" },
  { title: "Silent Warrior" }, { title: "Ocean's Rise" }, { title: "Kingdom of Stars" }, { title: "Last Light" },
];
const continueWatching = [
  { title: "Vikram Season 2 · E5" }, { title: "Money Heist · S4 E8" }, { title: "The Family Man" }, { title: "Kaala Paani" },
];
const microdramas = [
  { title: "CEO's Secret Bride", badge: "60 EPS" }, { title: "Love in Vengeance" }, { title: "Billionaire Next Door" },
  { title: "Cursed Marriage" }, { title: "Revenge of the Ex" }, { title: "The Fake Heiress" },
];
const originals = [
  { title: "Nila Original: Kaadhal" }, { title: "Nila Original: Rain" }, { title: "Nila Original: Aval" },
  { title: "Nila Original: Kadal" }, { title: "Nila Original: Vidiyal" },
];

export default function Home() {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopNav />

      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] -mt-0">
        <div className="absolute inset-0 nila-gradient" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.2), transparent 60%)" }} />
        <div className="absolute inset-0 hero-gradient" />

        <div className="relative z-10 h-full flex items-end pb-8 md:pb-16 px-4 md:px-12 max-w-[1400px] mx-auto">
          <div className="max-w-xl">
            <span className="inline-block text-xs font-bold bg-nila px-2.5 py-1 rounded-md mb-3">NILA ORIGINAL</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">The Midnight Shore</h1>
            <div className="flex items-center gap-3 text-xs md:text-sm text-white/80 mb-3">
              <span className="text-nila-light">★ 8.7</span>
              <span>2026</span><span>·</span><span>Thriller</span><span>·</span><span>2h 14m</span>
              <span className="px-1.5 py-0.5 border border-white/40 text-[10px]">U/A 16+</span>
            </div>
            <p className="text-white/80 text-sm md:text-base mb-6 line-clamp-3">
              A coastal detective uncovers a decades-old conspiracy that reaches into the heart of the city's most powerful families.
            </p>
            <div className="flex gap-3">
              <Link href="/player/1" className="px-6 py-3 bg-white text-black rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-white/90">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="black"><path d="M8 5v14l11-7z"/></svg>
                Play
              </Link>
              <Link href="/details/1" className="px-6 py-3 bg-white/15 backdrop-blur border border-white/25 rounded-full font-semibold text-sm hover:bg-white/25">
                More Info
              </Link>
              <button className="w-11 h-11 rounded-full bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center hover:bg-white/25">+</button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto md:px-12 py-8 -mt-16 relative z-20">
        <Row title="Continue Watching" items={continueWatching} ratio="landscape" />
        <Row title="Trending Now" items={trending} />
        <Row title="Microdramas · Short & Addictive" items={microdramas} />
        <Row title="Nila Originals" items={originals} />

        {/* Genre grid */}
        <section className="mb-8 px-4 md:px-0">
          <h2 className="text-lg md:text-xl font-bold mb-4">Browse by Genre</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              ["Action", "#ef4444"], ["Romance", "#E6578A"], ["Comedy", "#f59e0b"], ["Thriller", "#7c3aed"],
              ["Drama", "#06b6d4"], ["Sci-Fi", "#10b981"], ["Horror", "#dc2626"], ["Kids", "#f97316"],
            ].map(([g, c]) => (
              <div key={g} className="aspect-[16/8] rounded-xl relative overflow-hidden cursor-pointer group" style={{ background: `linear-gradient(135deg, ${c} 0%, rgba(0,0,0,0.5) 100%)` }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg md:text-xl font-bold">{g}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Live now */}
        <section className="mb-8 px-4 md:px-0">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg md:text-xl font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live Now
            </h2>
            <Link href="/live" className="text-xs text-nila-light">See all →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-surface">
                <div className="aspect-video relative">
                  <Poster title="" id={i * 3} ratio="landscape" />
                  <span className="absolute top-2 left-2 text-[10px] font-bold bg-red-600 px-2 py-0.5 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" /> LIVE
                  </span>
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold">Nila News {i}</p>
                  <p className="text-xs text-white/50 mt-0.5">Prime Time Debate</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <BottomNav />
    </div>
  );
}
