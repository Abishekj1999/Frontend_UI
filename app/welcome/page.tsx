import Link from "next/link";
import { Logo } from "../components/Logo";

const profiles = [
  { name: "Shalini", initial: "S", color: "linear-gradient(135deg,#ff9dbe,#E6578A)" },
  { name: "Ravi", initial: "R", color: "linear-gradient(135deg,#4a5cf8,#1e2a7a)" },
  { name: "Kids", initial: "K", color: "linear-gradient(135deg,#f59e0b,#78350f)" },
];

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, rgba(230,87,138,0.15), transparent 55%)" }} />

      <div className="relative z-10 max-w-3xl w-full text-center">
        <div className="flex justify-center mb-6"><Logo size={44} /></div>
        <p className="eyebrow mb-3">Welcome back</p>
        <h1 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-3">Who's watching?</h1>
        <p className="text-muted mb-12 max-w-md mx-auto">Pick a profile to personalize your recommendations and continue where you left off.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 mb-12">
          {profiles.map((p) => (
            <Link key={p.name} href="/login" className="group flex flex-col items-center">
              <div
                className="w-24 h-24 md:w-32 md:h-32 rounded-3xl flex items-center justify-center font-display font-bold text-4xl md:text-5xl text-white shadow-2xl transition group-hover:scale-105 group-hover:nila-glow ring-2 ring-transparent group-hover:ring-white/30"
                style={{ background: p.color }}
              >{p.initial}</div>
              <p className="mt-4 text-sm font-medium">{p.name}</p>
            </Link>
          ))}
          {/* Add profile */}
          <Link href="/account/edit" className="group flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl border-2 border-dashed border-white/20 flex items-center justify-center text-white/40 group-hover:border-nila group-hover:text-nila transition">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12h14"/></svg>
            </div>
            <p className="mt-4 text-sm text-white/60">Add profile</p>
          </Link>
        </div>

        <button className="text-sm text-muted underline decoration-white/20 hover:text-white">Manage profiles</button>
      </div>
    </div>
  );
}
