import { TopNav, BottomNav } from "../components/Nav";
import { Poster } from "../components/Poster";

const filters = ["All", "Tamil", "Hindi", "English", "Telugu", "Malayalam", "Korean"];
const genres = ["Action", "Romance", "Thriller", "Comedy", "Drama", "Horror", "Sci-Fi"];

const movies = Array.from({ length: 24 }, (_, i) => ({
  title: ["Vikram", "Beast", "Master", "Kaithi", "Pushpa", "RRR", "KGF", "Vada Chennai", "Asuran", "Karnan", "Soorarai", "Jai Bhim"][i % 12] + (i > 11 ? " 2" : ""),
  badge: i < 3 ? "NEW" : undefined,
}));

export default function Movies() {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopNav />
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Movies</h1>

        <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-4">
          {filters.map((f, i) => (
            <button key={f} className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${i === 0 ? "bg-nila text-white" : "bg-surface text-white/70 hover:bg-surface-2"}`}>{f}</button>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-6">
          {genres.map((g) => (
            <button key={g} className="px-4 py-2 rounded-full text-sm bg-surface text-white/70 whitespace-nowrap hover:bg-surface-2 border border-white/5">{g}</button>
          ))}
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {movies.map((m, i) => (
            <Poster key={i} title={m.title} id={i} badge={m.badge} />
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
