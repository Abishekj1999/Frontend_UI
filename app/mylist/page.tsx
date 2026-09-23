import { PageHeader } from "../components/Nav";
import { Poster } from "../components/Poster";
import { Icon } from "../components/Icon";

export default function MyList() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader title="My List" back="/profile" right={<button className="text-xs font-mono text-nila-light">EDIT</button>} />
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-6">
        <p className="text-sm text-muted mb-6">36 titles · Synced across all devices</p>

        <div className="flex gap-2 mb-6 overflow-x-auto hide-scrollbar">
          {["All", "Movies", "Series", "Microdrama", "Downloaded"].map((t, i) => (
            <button key={t} className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${i === 0 ? "bg-white text-black" : "bg-surface border border-line text-white/70"}`}>{t}</button>
          ))}
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="relative group">
              <Poster title={`My Title ${i + 1}`} id={i + 2} />
              <button className="absolute top-2 right-2 w-7 h-7 rounded-full glass-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition"><Icon name="close" size={12} /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
