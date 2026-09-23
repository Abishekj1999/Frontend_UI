import { PageHeader } from "../components/Nav";
import { Icon } from "../components/Icon";

const notifs = [
  { icon: "film", tone: "nila", title: "New episode available", body: "Vikram VD · S2 Episode 6 is now streaming", time: "2m ago", unread: true },
  { icon: "live", tone: "red", title: "Live now", body: "IPL Final · CSK vs MI · Tap to watch", time: "12m ago", unread: true },
  { icon: "heart", tone: "nila", title: "Trending in India", body: "The Midnight Shore is #1 today", time: "1h ago", unread: true },
  { icon: "play", tone: "muted", title: "Continue watching", body: "You left Family Man at 42:15. Resume now?", time: "3h ago" },
  { icon: "card", tone: "green", title: "Payment successful", body: "Your Premium plan renewed for ₹352.82", time: "Yesterday" },
  { icon: "crown", tone: "nila", title: "Weekend offer", body: "Upgrade to Family and save ₹200", time: "2d ago" },
  { icon: "lock", tone: "amber", title: "New sign-in detected", body: "iPhone 14 signed in from Chennai", time: "3d ago" },
];

const tones: Record<string, string> = {
  nila: "bg-nila/15 text-nila-light border-nila/25",
  red: "bg-red-500/15 text-red-400 border-red-500/25",
  green: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  amber: "bg-amber-500/15 text-amber-400 border-amber-500/25",
  muted: "bg-white/8 text-white/70 border-white/10",
};

export default function Notifications() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader title="Notifications" back="/profile" right={<button className="text-xs font-mono text-nila-light">MARK ALL</button>} />
      <div className="max-w-2xl mx-auto px-4 md:px-6 py-6">
        <div className="flex gap-2 mb-6">
          {["All", "Unread", "System"].map((t, i) => (
            <button key={t} className={`px-4 py-2 rounded-full text-sm ${i === 0 ? "bg-white text-black" : "bg-surface border border-line text-white/70"}`}>{t}</button>
          ))}
        </div>

        <div className="space-y-2">
          {notifs.map((n, i) => (
            <div key={i} className={`p-4 rounded-2xl border flex gap-3 items-start hover:bg-white/[0.02] transition ${n.unread ? "bg-nila/5 border-nila/20" : "bg-surface border-line"}`}>
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${tones[n.tone]}`}><Icon name={n.icon} size={18} /></div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm">{n.title}</p>
                  {n.unread && <span className="w-2 h-2 rounded-full bg-nila" />}
                </div>
                <p className="text-sm text-muted-2 mt-1 leading-relaxed">{n.body}</p>
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted mt-2">{n.time}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-muted mt-8 font-mono uppercase tracking-widest">End of notifications</p>
      </div>
    </div>
  );
}
