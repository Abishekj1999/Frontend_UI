import Link from "next/link";
import { Logo } from "./components/Logo";

const pages = [
  { href: "/splash", label: "Splash", desc: "App launch screen" },
  { href: "/login", label: "Login", desc: "Phone / Email / OTP" },
  { href: "/home", label: "Home", desc: "Discover feed" },
  { href: "/movies", label: "Movies", desc: "Movie catalog" },
  { href: "/series", label: "Series", desc: "TV shows & seasons" },
  { href: "/microdrama", label: "Microdrama", desc: "Vertical short-form" },
  { href: "/live", label: "Live TV", desc: "Live channels" },
  { href: "/search", label: "Search", desc: "Discover content" },
  { href: "/details/1", label: "Movie Details", desc: "Content detail page" },
  { href: "/series/1", label: "Series Details", desc: "Seasons & episodes" },
  { href: "/player/1", label: "Video Player", desc: "Fullscreen player" },
  { href: "/mylist", label: "My List", desc: "Watchlist" },
  { href: "/downloads", label: "Downloads", desc: "Offline content" },
  { href: "/profile", label: "Profile", desc: "Account & settings" },
  { href: "/subscription", label: "Subscription", desc: "Plans & pricing" },
  { href: "/notifications", label: "Notifications", desc: "Activity center" },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-10">
          <Logo size={40} />
          <span className="text-xs text-white/50">Design Preview · Web + Mobile</span>
        </div>
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Nila<span className="text-nila">OTT</span> Design System
          </h1>
          <p className="text-white/60 max-w-2xl">
            Complete UI mockups for the Nila OTT streaming platform. Responsive designs work for both web (desktop) and mobile app. Click any page to preview.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {pages.map((p) => (
            <Link key={p.href} href={p.href}
              className="group p-5 rounded-2xl bg-surface border border-white/5 hover:border-nila/50 hover:bg-surface-2 transition">
              <div className="w-10 h-10 rounded-xl nila-gradient mb-3 group-hover:nila-glow transition" />
              <h3 className="font-semibold mb-1">{p.label}</h3>
              <p className="text-xs text-white/50">{p.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-xs text-white/40">
          Theme color <span className="text-nila font-mono">#E6578A</span> · Built with Next.js + Tailwind
        </div>
      </div>
    </div>
  );
}
