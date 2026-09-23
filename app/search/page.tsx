import { TopNav, BottomNav } from "../components/Nav";
import { Poster } from "../components/Poster";
import { Icon } from "../components/Icon";

export default function Search() {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopNav />
      <div className="max-w-[1200px] mx-auto px-4 md:px-12 py-8">
        <div className="relative mb-8">
          <input placeholder="Search movies, series, microdramas, live channels…" className="w-full bg-surface border border-line focus:border-nila outline-none rounded-2xl pl-14 pr-14 py-4 text-sm placeholder:text-muted" />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-nila-light"><Icon name="search" size={22} /></div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted"><Icon name="filter" size={18} /></div>
        </div>

        <div className="flex gap-2 mb-10 flex-wrap">
          {["All", "Movies", "Series", "Microdrama", "Live", "Kids"].map((f, i) => (
            <button key={f} className={`px-4 py-2 rounded-full text-sm ${i === 0 ? "bg-white text-black" : "bg-surface border border-line text-white/70"}`}>{f}</button>
          ))}
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-lg">Recent</h2>
            <button className="text-xs text-muted font-mono">Clear all</button>
          </div>
          <div className="flex gap-2 flex-wrap">
            {["Vikram", "Family Man", "K-Drama", "IPL Live", "Nila Originals", "Comedy movies"].map((t) => (
              <button key={t} className="px-4 py-2 rounded-full text-sm bg-surface border border-line hover:border-nila/50 flex items-center gap-2">
                <Icon name="history" size={14} className="text-muted" />{t}
                <Icon name="close" size={12} className="text-muted" />
              </button>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-display font-bold text-lg mb-4">Trending Searches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              ["Vikram 2", "↑ 234%"], ["IPL Final Live", "↑ 180%"], ["Family Man S3", "↑ 156%"],
              ["Microdrama Romance", "↑ 98%"], ["Kaadhal Original", "↑ 76%"], ["Squid Game S3", "↑ 62%"],
            ].map(([t, u], i) => (
              <div key={t} className="flex items-center gap-4 p-3.5 rounded-2xl bg-surface border border-line hover:border-nila/40 cursor-pointer transition">
                <span className={`font-display font-bold text-3xl w-8 ${i < 3 ? "nila-text" : "text-white/25"}`}>{i + 1}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium">{t}</p>
                  <p className="text-[11px] font-mono text-nila-light mt-0.5">{u}</p>
                </div>
                <Icon name="search" size={16} className="text-muted" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display font-bold text-lg mb-4">Popular Now</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <Poster key={i} title={`Title ${i + 1}`} id={i * 3} />
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
