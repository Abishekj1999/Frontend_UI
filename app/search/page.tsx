import { TopNav, BottomNav } from "../components/Nav";
import { Poster } from "../components/Poster";

export default function Search() {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopNav />
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-6">
        <div className="relative mb-6">
          <input placeholder="Search movies, series, microdramas, live channels..." className="w-full bg-surface border border-white/10 focus:border-nila outline-none rounded-full pl-12 pr-4 py-3.5 text-sm" />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>
        </div>

        <div className="mb-8">
          <h2 className="text-sm font-semibold text-white/60 mb-3">Recent Searches</h2>
          <div className="flex gap-2 flex-wrap">
            {["Vikram", "Family Man", "K-Drama", "IPL Live", "Comedy movies", "Nila Originals"].map((t) => (
              <button key={t} className="px-4 py-2 rounded-full text-sm bg-surface border border-white/10 hover:border-nila/50 flex items-center gap-2">
                <span>🕐</span>{t}<span className="text-white/40">×</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-sm font-semibold text-white/60 mb-3">Trending Searches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {["1. Vikram 2", "2. IPL Final Live", "3. Family Man S3", "4. Microdrama Romance", "5. Kaadhal Original", "6. Squid Game S3"].map((t, i) => (
              <div key={t} className="flex items-center gap-3 p-3 rounded-xl bg-surface hover:bg-surface-2 cursor-pointer">
                <span className={`text-2xl font-bold ${i < 3 ? "text-nila" : "text-white/30"}`}>{i + 1}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium">{t.replace(/^\d+\.\s/, "")}</p>
                  <p className="text-[10px] text-white/50">↑ Rising</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white/60 mb-3">Popular Now</h2>
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
