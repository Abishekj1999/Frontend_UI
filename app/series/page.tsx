import Link from "next/link";
import { TopNav, BottomNav } from "../components/Nav";
import { Poster } from "../components/Poster";

const series = Array.from({ length: 18 }, (_, i) => ({
  title: ["Family Man", "Kaala Paani", "Mirzapur", "Vikram VD", "Suzhal", "Vadhandhi", "Squid Game", "Money Heist", "Dark", "Stranger Things"][i % 10] + (i > 9 ? " S2" : ""),
  seasons: (i % 4) + 1,
  badge: i < 2 ? "NEW SEASON" : undefined,
}));

export default function Series() {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopNav />
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">TV Series</h1>
        <p className="text-white/60 text-sm mb-6">Binge-worthy seasons across every genre</p>

        <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-6">
          {["All", "Originals", "Trending", "Ongoing", "Completed", "Coming Soon"].map((f, i) => (
            <button key={f} className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${i === 0 ? "bg-nila text-white" : "bg-surface text-white/70"}`}>{f}</button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {series.map((s, i) => (
            <Link key={i} href={`/series/${i + 1}`} className="group">
              <Poster title={s.title} id={i + 5} badge={s.badge} />
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="text-white/70">{s.seasons} Season{s.seasons > 1 ? "s" : ""}</span>
                <span className="text-nila-light">★ {(7 + (i % 3) * 0.4).toFixed(1)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
