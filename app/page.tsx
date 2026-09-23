import Link from "next/link";
import { Logo } from "./components/Logo";
import { Icon } from "./components/Icon";

const groups = [
  { label: "Entry", pages: [
    { href: "/splash", label: "Splash", icon: "info" },
    { href: "/welcome", label: "Welcome & Profiles", icon: "user" },
    { href: "/login", label: "Login", icon: "key" },
  ]},
  { label: "Browse", pages: [
    { href: "/home", label: "Home", icon: "home" },
    { href: "/movies", label: "Movies", icon: "film" },
    { href: "/series", label: "Series", icon: "tv" },
    { href: "/microdrama", label: "Microdrama", icon: "micro" },
    { href: "/live", label: "Live TV", icon: "live" },
    { href: "/search", label: "Search", icon: "search" },
  ]},
  { label: "Content", pages: [
    { href: "/details/1", label: "Movie Details", icon: "film" },
    { href: "/series/1", label: "Series Details", icon: "tv" },
    { href: "/player/1", label: "Video Player", icon: "play" },
  ]},
  { label: "Library", pages: [
    { href: "/continue-watching", label: "Continue Watching", icon: "play" },
    { href: "/mylist", label: "My List", icon: "heart" },
    { href: "/history", label: "History", icon: "history" },
    { href: "/downloads", label: "Downloads", icon: "download" },
  ]},
  { label: "Account", pages: [
    { href: "/profile", label: "Profile", icon: "user" },
    { href: "/account/edit", label: "Edit Account", icon: "edit" },
    { href: "/account/password", label: "Change Password", icon: "key" },
    { href: "/account/membership", label: "Membership", icon: "crown" },
    { href: "/account/purchases", label: "Purchase History", icon: "card" },
    { href: "/plans", label: "Choose a Plan", icon: "crown" },
    { href: "/payment", label: "Payment", icon: "card" },
  ]},
  { label: "Settings", pages: [
    { href: "/playback", label: "Playback Settings", icon: "play" },
    { href: "/language", label: "Language", icon: "globe" },
    { href: "/app-settings", label: "App Settings", icon: "settings" },
    { href: "/notifications", label: "Notifications", icon: "bell" },
  ]},
  { label: "Support", pages: [
    { href: "/help", label: "Help & Support", icon: "help" },
    { href: "/about", label: "About Us", icon: "info" },
  ]},
];

export default function Index() {
  const total = groups.reduce((n, g) => n + g.pages.length, 0);
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-10">
          <Logo size={40} />
          <span className="font-mono text-xs uppercase tracking-widest text-muted">Design Preview · Web + Mobile</span>
        </div>

        <div className="mb-12">
          <p className="eyebrow mb-3">◆ {total} screens</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tighter mb-4">
            Nila<span className="text-nila">OTT</span> · Design System
          </h1>
          <p className="text-muted-2 max-w-xl leading-relaxed">
            The complete UI for a modern streaming platform. Responsive for both mobile app and web. Tap any screen to preview it.
          </p>
        </div>

        {groups.map((g) => (
          <section key={g.label} className="mb-10">
            <h2 className="eyebrow mb-4">{g.label}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {g.pages.map((p) => (
                <Link key={p.href} href={p.href}
                  className="group p-5 rounded-2xl bg-surface border border-line hover:border-nila/50 hover:bg-surface-2 transition">
                  <div className="w-10 h-10 rounded-xl nila-gradient mb-3 group-hover:nila-glow transition flex items-center justify-center">
                    <Icon name={p.icon} size={18} />
                  </div>
                  <h3 className="font-display font-semibold text-sm">{p.label}</h3>
                  <p className="font-mono text-[10px] text-muted mt-1 truncate">{p.href}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-12 pt-8 border-t border-line font-mono text-[11px] uppercase tracking-widest text-muted flex flex-wrap gap-x-6 gap-y-2">
          <span>Theme <span className="text-nila">#E6578A</span></span>
          <span>Next.js 16 + Tailwind v4</span>
          <span>Bricolage Grotesque · Inter · JetBrains Mono</span>
        </div>
      </div>
    </div>
  );
}
