"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const nav = [
  { href: "/home", label: "Home", icon: "M3 12l9-9 9 9v9a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2v-9z" },
  { href: "/movies", label: "Movies", icon: "M4 4h16v16H4z M4 8h16 M8 4v16 M16 4v16" },
  { href: "/series", label: "Series", icon: "M4 5h16v12H4z M8 21h8" },
  { href: "/microdrama", label: "Micro", icon: "M7 4h10v16H7z M12 18h.01" },
  { href: "/live", label: "Live", icon: "M12 12m-3 0a3 3 0 106 0 3 3 0 10-6 0 M12 4a8 8 0 018 8 M12 4a8 8 0 00-8 8" },
  { href: "/search", label: "Search", icon: "M21 21l-6-6 M10 17a7 7 0 100-14 7 7 0 000 14z" },
];

export function TopNav() {
  const pathname = usePathname();
  return (
    <header className="hidden md:flex sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto w-full px-6 py-4 flex items-center gap-8">
        <Link href="/home"><Logo /></Link>
        <nav className="flex items-center gap-1">
          {nav.map((n) => {
            const active = pathname.startsWith(n.href);
            return (
              <Link key={n.href} href={n.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${active ? "bg-nila text-white" : "text-white/70 hover:text-white hover:bg-white/5"}`}>
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <Link href="/search" className="p-2 rounded-full hover:bg-white/5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>
          </Link>
          <Link href="/notifications" className="p-2 rounded-full hover:bg-white/5 relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 004 0"/></svg>
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-nila"></span>
          </Link>
          <Link href="/profile" className="w-9 h-9 rounded-full nila-gradient flex items-center justify-center font-semibold text-sm">S</Link>
        </div>
      </div>
    </header>
  );
}

export function BottomNav() {
  const pathname = usePathname();
  const items = [
    { href: "/home", label: "Home" },
    { href: "/microdrama", label: "Micro" },
    { href: "/live", label: "Live" },
    { href: "/mylist", label: "My List" },
    { href: "/profile", label: "Profile" },
  ];
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-xl border-t border-white/5">
      <div className="grid grid-cols-5 px-2 py-2 pb-safe">
        {items.map((n) => {
          const active = pathname.startsWith(n.href);
          return (
            <Link key={n.href} href={n.href} className="flex flex-col items-center gap-1 py-1.5">
              <div className={`w-6 h-6 rounded-md ${active ? "bg-nila" : "bg-white/20"}`}></div>
              <span className={`text-[10px] ${active ? "text-nila" : "text-white/60"}`}>{n.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
