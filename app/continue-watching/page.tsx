import Link from "next/link";
import { PageHeader } from "../components/Nav";
import { Poster } from "../components/Poster";
import { Icon } from "../components/Icon";

const items = [
  { title: "Vikram VD", sub: "S2 · E5 · The Reckoning", left: "24 min left", prog: 68 },
  { title: "Family Man", sub: "S2 · E8 · Homecoming", left: "18 min left", prog: 42 },
  { title: "The Midnight Shore", sub: "Movie", left: "1h 42m left", prog: 22 },
  { title: "Suzhal", sub: "S1 · E3 · Ash & Water", left: "4 min left", prog: 89 },
  { title: "Money Heist", sub: "S5 · E7", left: "34 min left", prog: 55 },
  { title: "Kaala Paani", sub: "S1 · E4", left: "22 min left", prog: 61 },
];

export default function ContinueWatching() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Continue Watching" back="/profile" />
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-6 space-y-3">
        {items.map((it, i) => (
          <Link key={i} href={`/player/${i + 1}`} className="flex gap-4 p-3 rounded-2xl bg-surface border border-line hover:border-nila/40 transition group">
            <div className="w-40 md:w-52 shrink-0">
              <Poster id={i * 3} ratio="landscape" progress={it.prog} />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
              <div>
                <h3 className="font-display font-bold text-lg leading-tight">{it.title}</h3>
                <p className="text-xs text-muted mt-1">{it.sub}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-mono uppercase tracking-wider text-nila-light">{it.left}</p>
                <div className="flex items-center gap-1">
                  <button className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center"><Icon name="close" size={14} className="text-white/60" /></button>
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"><Icon name="play" size={14} stroke={0} className="fill-black" /></div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
