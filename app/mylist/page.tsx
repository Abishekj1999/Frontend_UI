import { TopNav, BottomNav } from "../components/Nav";
import { Poster } from "../components/Poster";

export default function MyList() {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopNav />
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">My List</h1>
        <p className="text-white/60 text-sm mb-6">Your saved titles, in one place</p>

        <div className="flex gap-2 mb-6">
          {["All", "Movies", "Series", "Microdrama"].map((t, i) => (
            <button key={t} className={`px-4 py-2 rounded-full text-sm ${i === 0 ? "bg-nila text-white" : "bg-surface text-white/70"}`}>{t}</button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="relative">
              <Poster title={`My Title ${i + 1}`} id={i + 2} />
              <button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/70 backdrop-blur flex items-center justify-center text-xs">×</button>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
