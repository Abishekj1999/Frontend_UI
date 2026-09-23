import Link from "next/link";
import { TopNav, BottomNav } from "../components/Nav";

type SettingItem = { label: string; meta?: string; href?: string };
const settings: { group: string; items: SettingItem[] }[] = [
  { group: "Account", items: [
    { label: "Edit Profile", meta: "Name, email, phone", href: "#" },
    { label: "Manage Profiles", meta: "3 profiles", href: "#" },
    { label: "Subscription", meta: "Premium · Renews Oct 12", href: "/subscription" },
    { label: "Payment Methods", meta: "•••• 4242", href: "#" },
  ]},
  { group: "Playback", items: [
    { label: "Video Quality", meta: "Auto (4K)" },
    { label: "Download Quality", meta: "HD" },
    { label: "Audio Language", meta: "Tamil" },
    { label: "Subtitles", meta: "English" },
    { label: "Autoplay next episode", meta: "On" },
  ]},
  { group: "Preferences", items: [
    { label: "App Language", meta: "English" },
    { label: "Notifications", meta: "On", href: "/notifications" },
    { label: "Parental Controls", meta: "Off" },
    { label: "Data Saver", meta: "Off" },
  ]},
  { group: "Support", items: [
    { label: "Help Center" },
    { label: "Contact Us" },
    { label: "About Nila OTT", meta: "v1.0.0" },
    { label: "Privacy Policy" },
    { label: "Terms of Service" },
  ]},
];

export default function Profile() {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopNav />
      <div className="max-w-4xl mx-auto px-4 md:px-12 py-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-20 rounded-full nila-gradient nila-glow flex items-center justify-center text-3xl font-bold">S</div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Shalini R.</h1>
            <p className="text-sm text-white/60">shaliniravi1308@gmail.com</p>
            <span className="inline-block mt-1 text-[10px] font-bold bg-nila px-2 py-0.5 rounded">PREMIUM</span>
          </div>
          <button className="px-4 py-2 rounded-full bg-surface border border-white/10 text-sm">Edit</button>
        </div>

        {/* Profile switcher */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-white/60 mb-3">Who's watching?</h2>
          <div className="flex gap-3">
            {["S", "R", "K", "+"].map((p, i) => (
              <div key={i} className="text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl mb-1 ${i === 0 ? "nila-gradient nila-glow" : "bg-surface border border-white/10"}`}>{p}</div>
                <p className="text-xs">{["Shalini", "Ravi", "Kids", "Add"][i]}</p>
              </div>
            ))}
          </div>
        </div>

        {settings.map((g) => (
          <div key={g.group} className="mb-6">
            <h3 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-2 px-2">{g.group}</h3>
            <div className="rounded-2xl bg-surface border border-white/5 divide-y divide-white/5">
              {g.items.map((it) => {
                const Row = (
                  <div className="flex items-center justify-between px-4 py-3.5 hover:bg-surface-2">
                    <span className="text-sm">{it.label}</span>
                    <span className="text-sm text-white/50 flex items-center gap-2">{it.meta}<span className="text-white/30">›</span></span>
                  </div>
                );
                return it.href ? <Link key={it.label} href={it.href}>{Row}</Link> : <div key={it.label}>{Row}</div>;
              })}
            </div>
          </div>
        ))}

        <button className="w-full py-3.5 rounded-2xl bg-surface border border-red-500/30 text-red-400 font-semibold text-sm mt-4">Sign Out</button>
      </div>
      <BottomNav />
    </div>
  );
}
