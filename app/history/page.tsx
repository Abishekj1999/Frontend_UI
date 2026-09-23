import { PageHeader } from "../components/Nav";
import { Poster } from "../components/Poster";
import { Icon } from "../components/Icon";

const groups = [
  { label: "Today", items: [
    { title: "The Midnight Shore", sub: "Watched 2h 14m", time: "8:42 PM" },
    { title: "Vikram VD · S2 E5", sub: "Watched 47 min", time: "5:12 PM" },
  ]},
  { label: "Yesterday", items: [
    { title: "Family Man · S2 E8", sub: "Watched 42 min", time: "10:30 PM" },
    { title: "CEO's Secret Bride · Ep 12", sub: "Watched 3 min", time: "9:15 PM" },
    { title: "Nila News · Prime Debate", sub: "Watched 1h 5m", time: "8:00 PM" },
  ]},
  { label: "This Week", items: [
    { title: "Suzhal · S1 E3", sub: "Watched 44 min", time: "Mon" },
    { title: "Money Heist · S5 E7", sub: "Watched 51 min", time: "Sun" },
    { title: "Kaala Paani · S1 E4", sub: "Watched 38 min", time: "Sat" },
  ]},
];

export default function History() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader title="Watch History" back="/profile" right={<button className="text-xs font-mono text-red-400">CLEAR</button>} />
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-6">
        {groups.map((g) => (
          <div key={g.label} className="mb-8">
            <h3 className="eyebrow px-2 mb-3">{g.label}</h3>
            <div className="space-y-2">
              {g.items.map((it, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-surface border border-line hover:border-nila/30 transition">
                  <div className="w-24 shrink-0"><Poster id={i * 7 + g.label.length} ratio="landscape" /></div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">{it.title}</p>
                    <p className="text-xs text-muted mt-0.5">{it.sub}</p>
                    <p className="text-[11px] font-mono text-nila-light mt-1">{it.time}</p>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center"><Icon name="trash" size={14} className="text-white/50" /></button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
