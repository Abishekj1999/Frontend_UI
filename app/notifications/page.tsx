import { TopNav, BottomNav } from "../components/Nav";

const notifs = [
  { icon: "🎬", title: "New Episode Available", body: "Vikram VD · S2 Episode 6 is now streaming", time: "2m ago", unread: true },
  { icon: "🔥", title: "Trending in your area", body: "The Midnight Shore is #1 in India today", time: "1h ago", unread: true },
  { icon: "🎉", title: "Continue watching", body: "You left Family Man at 42:15. Resume now?", time: "3h ago", unread: true },
  { icon: "💳", title: "Payment successful", body: "Your Premium plan renewed for ₹299", time: "Yesterday" },
  { icon: "🎁", title: "Weekend offer", body: "Upgrade to Family plan and save ₹200", time: "2d ago" },
  { icon: "📱", title: "New login detected", body: "iPhone 14 signed in to your account", time: "3d ago" },
];

export default function Notifications() {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopNav />
      <div className="max-w-2xl mx-auto px-4 md:px-12 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Notifications</h1>
          <button className="text-xs text-nila-light">Mark all read</button>
        </div>

        <div className="space-y-2">
          {notifs.map((n, i) => (
            <div key={i} className={`p-4 rounded-xl border flex gap-3 items-start ${n.unread ? "bg-nila/5 border-nila/20" : "bg-surface border-white/5"}`}>
              <div className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center text-lg shrink-0">{n.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm">{n.title}</p>
                  {n.unread && <span className="w-2 h-2 rounded-full bg-nila" />}
                </div>
                <p className="text-sm text-white/70 mt-0.5">{n.body}</p>
                <p className="text-xs text-white/40 mt-1">{n.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
