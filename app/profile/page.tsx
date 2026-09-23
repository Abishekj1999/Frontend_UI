import Link from "next/link";
import { TopNav, BottomNav } from "../components/Nav";
import { SettingsList, SectionLabel } from "../components/ListRow";
import { Icon } from "../components/Icon";

export default function Profile() {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopNav />
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-8">
        {/* Hero card */}
        <div className="relative overflow-hidden rounded-3xl p-6 md:p-8 mb-8 border border-line" style={{ background: "linear-gradient(135deg, rgba(230,87,138,0.15), rgba(230,87,138,0.02))" }}>
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full nila-gradient opacity-30 blur-3xl" />
          <div className="relative flex items-center gap-5">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl nila-gradient nila-glow flex items-center justify-center font-display font-bold text-4xl">S</div>
            <div className="flex-1 min-w-0">
              <h1 className="font-display font-bold text-2xl md:text-3xl tracking-tight">Shalini R.</h1>
              <p className="text-sm text-muted truncate">shaliniravi1308@gmail.com</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold bg-nila px-2 py-0.5 rounded tracking-widest">
                  <Icon name="crown" size={10} /> PREMIUM
                </span>
                <span className="text-[11px] text-muted">Renews Oct 12</span>
              </div>
            </div>
            <Link href="/account/edit" className="p-2.5 rounded-full bg-white/10 hover:bg-white/20"><Icon name="edit" size={16} /></Link>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 divide-x divide-white/10">
            {[["124", "Watched"], ["36", "In list"], ["8", "Downloads"]].map(([n, l]) => (
              <div key={l} className="text-center">
                <p className="font-display font-bold text-2xl">{n}</p>
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Profile switcher */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4 px-2">
            <h3 className="eyebrow">Profiles</h3>
            <Link href="/welcome" className="text-xs text-nila-light font-mono">Manage</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {[
              { l: "Shalini", i: "S", g: "linear-gradient(135deg,#ff9dbe,#E6578A)", active: true },
              { l: "Ravi", i: "R", g: "linear-gradient(135deg,#4a5cf8,#1e2a7a)" },
              { l: "Kids", i: "K", g: "linear-gradient(135deg,#f59e0b,#78350f)" },
            ].map((p) => (
              <div key={p.l} className="text-center shrink-0">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-display font-bold text-xl mb-1 ${p.active ? "nila-glow ring-2 ring-white/50" : ""}`} style={{ background: p.g }}>{p.i}</div>
                <p className="text-xs">{p.l}</p>
              </div>
            ))}
            <div className="text-center shrink-0">
              <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-white/15 flex items-center justify-center text-white/40 mb-1"><Icon name="plus" /></div>
              <p className="text-xs text-muted">Add</p>
            </div>
          </div>
        </div>

        <SectionLabel>Watching</SectionLabel>
        <SettingsList items={[
          { label: "Continue Watching", icon: "play", meta: "4 titles", href: "/continue-watching" },
          { label: "My List", icon: "heart", meta: "36 titles", href: "/mylist" },
          { label: "Watch History", icon: "history", meta: "124 items", href: "/history" },
          { label: "Downloads", icon: "download", meta: "8 · 4.3 GB", href: "/downloads" },
        ]} />

        <SectionLabel>Account</SectionLabel>
        <SettingsList items={[
          { label: "Edit Profile", icon: "user", href: "/account/edit" },
          { label: "Change Password", icon: "key", href: "/account/password" },
          { label: "Membership", icon: "crown", meta: "Premium", href: "/account/membership" },
          { label: "Purchase History", icon: "card", href: "/account/purchases" },
          { label: "Payment Methods", icon: "card", meta: "•••• 4242", href: "/payment" },
        ]} />

        <SectionLabel>App</SectionLabel>
        <SettingsList items={[
          { label: "Playback Settings", icon: "play", href: "/playback" },
          { label: "Language", icon: "globe", meta: "English", href: "/language" },
          { label: "App Settings", icon: "settings", href: "/app-settings" },
          { label: "Notifications", icon: "bell", href: "/notifications" },
        ]} />

        <SectionLabel>Support</SectionLabel>
        <SettingsList items={[
          { label: "Help & Support", icon: "help", href: "/help" },
          { label: "About Nila", icon: "info", meta: "v1.0.0", href: "/about" },
        ]} />

        <button className="w-full mt-8 py-4 rounded-2xl bg-surface border border-red-500/25 text-red-400 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-red-500/5">
          <Icon name="logout" size={16} /> Sign Out
        </button>

        <p className="text-center text-[11px] font-mono uppercase tracking-widest text-muted mt-8">Nila OTT · v1.0.0</p>
      </div>
      <BottomNav />
    </div>
  );
}
