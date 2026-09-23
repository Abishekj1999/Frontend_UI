import Link from "next/link";
import { TopNav, BottomNav } from "../components/Nav";
import { Row } from "../components/Row";
import { Poster } from "../components/Poster";
import { Icon } from "../components/Icon";

const continueWatching = [
  { title: "Vikram VD · S2 E5", progress: 68 },
  { title: "Family Man · S2 E8", progress: 42 },
  { title: "The Midnight Shore", progress: 22 },
  { title: "Suzhal · E3", progress: 89 },
];
const trending = [
  { title: "The Midnight Shore", badge: "#1" }, { title: "Chennai Express 2" }, { title: "Neon Dreams", badge: "NEW" },
  { title: "Silent Warrior" }, { title: "Ocean's Rise" }, { title: "Kingdom of Stars" }, { title: "Last Light" },
];
const microdramas = [
  { title: "CEO's Secret Bride", badge: "60 EPS" }, { title: "Love in Vengeance" }, { title: "Billionaire Next Door" },
  { title: "Cursed Marriage" }, { title: "Revenge of the Ex" }, { title: "The Fake Heiress" },
];
const originals = [
  { title: "Kaadhal" }, { title: "Rain" }, { title: "Aval" }, { title: "Kadal" }, { title: "Vidiyal" },
];

const genres = [
  { name: "Action", c: ["#ef4444", "#7f1d1d"] },
  { name: "Romance", c: ["#E6578A", "#7a1e46"] },
  { name: "Comedy", c: ["#f59e0b", "#78350f"] },
  { name: "Thriller", c: ["#7c3aed", "#4c1d95"] },
  { name: "Drama", c: ["#06b6d4", "#164e63"] },
  { name: "Sci-Fi", c: ["#10b981", "#064e3b"] },
  { name: "Horror", c: ["#dc2626", "#450a0a"] },
  { name: "Kids", c: ["#f97316", "#7c2d12"] },
];

export default function Home() {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopNav />

      {/* Hero */}
      <section className="relative h-[75vh] md:h-[85vh]">
        <div className="absolute inset-0 nila-gradient" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.25), transparent 55%)" }} />
        <div className="absolute inset-0 hero-gradient" />

        <div className="relative z-10 h-full flex items-end pb-10 md:pb-20 px-4 md:px-12 max-w-[1440px] mx-auto">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] bg-white/15 backdrop-blur border border-white/20 px-3 py-1.5 rounded-full mb-4">
              ● NILA ORIGINAL
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter leading-[0.92] mb-4">The Midnight Shore</h1>
            <div className="flex items-center gap-3 text-sm text-white/90 mb-4 flex-wrap">
              <span className="text-nila-light font-semibold">★ 8.7</span>
              <span>2026</span><span className="text-white/40">·</span><span>Thriller</span>
              <span className="text-white/40">·</span><span>2h 14m</span>
              <span className="px-1.5 py-0.5 border border-white/40 text-[10px] rounded">U/A 16+</span>
              <span className="px-2 py-0.5 bg-white/15 rounded text-[10px]">4K HDR</span>
            </div>
            <p className="text-white/85 text-sm md:text-base mb-8 max-w-xl leading-relaxed">
              A coastal detective uncovers a decades-old conspiracy that reaches into the heart of the city's most powerful families.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/player/1" className="px-8 py-3.5 bg-white text-black rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-white/90 transition">
                <Icon name="play" size={16} stroke={0} className="fill-black" /> Play
              </Link>
              <Link href="/details/1" className="px-8 py-3.5 bg-white/15 backdrop-blur border border-white/25 rounded-full font-semibold text-sm hover:bg-white/25 transition flex items-center gap-2">
                <Icon name="info" size={16} /> More Info
              </Link>
              <button className="w-12 h-12 rounded-full bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center hover:bg-white/25"><Icon name="plus" size={18} /></button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto md:px-12 py-10 -mt-16 relative z-20">
        <Row title="Continue Watching" subtitle="Pick up where you left off" items={continueWatching} ratio="landscape" />
        <Row title="Trending Now" subtitle="What everyone's watching this week" items={trending} />
        <Row title="Microdramas" subtitle="Short. Addictive. 60 seconds a scene." items={microdramas} />
        <Row title="Nila Originals" subtitle="Stories you'll find nowhere else" items={originals} />

        {/* Genre grid */}
        <section className="mb-10 px-4 md:px-0">
          <h2 className="font-display font-bold text-xl md:text-2xl mb-4">Browse by Genre</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {genres.map((g) => (
              <div key={g.name} className="aspect-[16/8] rounded-2xl relative overflow-hidden cursor-pointer group border border-white/5" style={{ background: `linear-gradient(135deg, ${g.c[0]} 0%, ${g.c[1]} 100%)` }}>
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 55%)" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-bold text-2xl">{g.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Live now */}
        <section className="mb-10 px-4 md:px-0">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display font-bold text-xl md:text-2xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live Now
              </h2>
              <p className="text-xs text-muted mt-0.5">Streaming this moment</p>
            </div>
            <Link href="/live" className="text-xs text-nila-light font-mono">See all →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <Link href="/live" key={i} className="rounded-2xl overflow-hidden bg-surface border border-line hover:border-line-2 transition">
                <div className="aspect-video relative">
                  <Poster id={i * 3} ratio="landscape" />
                  <span className="absolute top-2 left-2 text-[10px] font-mono font-bold bg-red-600 px-2 py-0.5 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" /> LIVE
                  </span>
                  <span className="absolute top-2 right-2 text-[10px] bg-black/60 backdrop-blur px-2 py-0.5 rounded font-mono">👁 12.3K</span>
                </div>
                <div className="p-3">
                  <p className="text-xs text-nila-light font-mono uppercase tracking-wider">Nila News {i}</p>
                  <p className="text-sm font-semibold mt-1">Prime Time Debate</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <BottomNav />
    </div>
  );
}
