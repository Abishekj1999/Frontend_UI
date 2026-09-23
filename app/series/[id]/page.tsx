import Link from "next/link";
import { TopNav, BottomNav } from "../../components/Nav";
import { Poster } from "../../components/Poster";

const episodes = Array.from({ length: 8 }, (_, i) => ({
  n: i + 1,
  title: ["The Beginning", "Shadows", "Reckoning", "The Truth", "Broken", "Homecoming", "Rise", "Finale"][i],
  duration: `${40 + (i % 3) * 5} min`,
  desc: "A chance encounter forces our hero to reconsider everything they thought they knew about the past.",
}));

export default function SeriesDetail() {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopNav />

      <section className="relative h-[60vh]">
        <div className="absolute inset-0 nila-gradient" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 h-full flex items-end pb-8 px-4 md:px-12 max-w-[1400px] mx-auto">
          <div className="max-w-2xl">
            <span className="text-xs font-bold bg-nila px-2 py-1 rounded mb-3 inline-block">NILA ORIGINAL SERIES</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-3">Vikram VD</h1>
            <div className="flex items-center gap-3 text-sm text-white/85 mb-4">
              <span className="text-nila-light">★ 9.1</span>
              <span>2026</span><span>·</span><span>3 Seasons</span><span>·</span><span>Crime · Thriller</span>
              <span className="px-1.5 py-0.5 border border-white/40 text-[10px]">U/A 16+</span>
            </div>
            <p className="text-white/80 mb-6 max-w-xl">Retired officer Vikram is pulled back into a case that will test the limits of law, family, and revenge.</p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/player/1" className="px-6 py-3 bg-white text-black rounded-full font-semibold text-sm flex items-center gap-2">▶ Play S1:E1</Link>
              <button className="px-6 py-3 bg-white/15 border border-white/25 rounded-full text-sm">+ My List</button>
              <button className="w-11 h-11 rounded-full bg-white/15 border border-white/25">↓</button>
              <button className="w-11 h-11 rounded-full bg-white/15 border border-white/25">↗</button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-8">
        {/* Season selector */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Episodes</h2>
            <select className="bg-surface border border-white/10 rounded-lg px-3 py-2 text-sm">
              <option>Season 1</option><option>Season 2</option><option>Season 3</option>
            </select>
          </div>
          <button className="text-sm text-white/60">Sort ↓</button>
        </div>

        <div className="space-y-3 mb-10">
          {episodes.map((ep) => (
            <Link key={ep.n} href={`/player/${ep.n}`} className="flex gap-4 p-3 rounded-xl bg-surface hover:bg-surface-2 border border-white/5 hover:border-nila/40 transition">
              <div className="w-40 md:w-56 shrink-0">
                <Poster title="" id={ep.n * 4} ratio="landscape" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-nila-light">{ep.n}</span>
                  <h3 className="font-semibold truncate">{ep.title}</h3>
                </div>
                <p className="text-xs text-white/50 mb-2">{ep.duration}</p>
                <p className="text-sm text-white/70 line-clamp-2">{ep.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Cast */}
        <h2 className="text-2xl font-bold mb-4">Cast & Crew</h2>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar mb-10">
          {["Kamal Haasan", "Vijay Sethupathi", "Fahadh Faasil", "Suriya", "Trisha", "Nayanthara"].map((name, i) => (
            <div key={name} className="text-center shrink-0 w-24">
              <div className="w-20 h-20 rounded-full mx-auto mb-2" style={{ background: `linear-gradient(135deg, hsl(${i * 60}, 60%, 50%), hsl(${i * 60}, 60%, 30%))` }} />
              <p className="text-xs font-medium">{name}</p>
              <p className="text-[10px] text-white/50">Actor</p>
            </div>
          ))}
        </div>

        {/* Related */}
        <h2 className="text-2xl font-bold mb-4">More Like This</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {["Suzhal", "Vadhandhi", "Mirzapur", "Family Man", "Kaala Paani", "Sacred Games"].map((t, i) => (
            <Poster key={i} title={t} id={i * 7} />
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
