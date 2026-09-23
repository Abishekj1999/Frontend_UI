"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Icon } from "./Icon";

const nav = [
  { href: "/home", label: "Home", icon: "home" },
  { href: "/movies", label: "Movies", icon: "film" },
  { href: "/series", label: "Series", icon: "tv" },
  { href: "/microdrama", label: "Micro", icon: "micro" },
  { href: "/live", label: "Live", icon: "live" },
];

export function TopNav() {
  const pathname = usePathname();
  return (
    <header className="hidden md:block sticky top-0 z-40 glass-dark border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 py-3.5 flex items-center gap-8">
        <Link href="/home"><Logo /></Link>
        <nav className="flex items-center gap-1">
          {nav.map((n) => {
            const active = pathname.startsWith(n.href);
            return (
              <Link key={n.href} href={n.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${active ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5"}`}>
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Link href="/search" className="w-9 h-9 rounded-full hover:bg-white/5 flex items-center justify-center text-white/80"><Icon name="search" /></Link>
          <Link href="/notifications" className="w-9 h-9 rounded-full hover:bg-white/5 flex items-center justify-center text-white/80 relative">
            <Icon name="bell" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-nila" />
          </Link>
          <Link href="/profile" className="w-9 h-9 rounded-full nila-gradient flex items-center justify-center font-display font-bold text-sm">S</Link>
        </div>
      </div>
    </header>
  );
}

export function BottomNav() {
  const pathname = usePathname();
  const items = [
    { href: "/home", label: "Home", icon: "home" },
    { href: "/microdrama", label: "Micro", icon: "micro" },
    { href: "/live", label: "Live", icon: "live" },
    { href: "/mylist", label: "List", icon: "heart" },
    { href: "/profile", label: "Me", icon: "user" },
  ];
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 glass-dark border-t border-white/5">
      <div className="grid grid-cols-5 px-2 py-2">
        {items.map((n) => {
          const active = pathname.startsWith(n.href);
          return (
            <Link key={n.href} href={n.href} className="flex flex-col items-center gap-0.5 py-1.5">
              <div className={active ? "text-nila" : "text-white/50"}><Icon name={n.icon} size={22} /></div>
              <span className={`text-[10px] ${active ? "text-nila" : "text-white/50"}`}>{n.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function PageHeader({ title, back = "/profile", right }: { title: string; back?: string; right?: React.ReactNode }) {
  return (
    <div className="sticky top-0 z-30 glass-dark border-b border-white/5">
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-3.5 flex items-center gap-3">
        <Link href={back} className="w-9 h-9 rounded-full hover:bg-white/5 flex items-center justify-center -ml-1"><Icon name="back" /></Link>
        <h1 className="font-display font-bold text-lg flex-1 truncate">{title}</h1>
        {right}
      </div>
    </div>
  );
}
