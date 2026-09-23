import Link from "next/link";

export default function Splash() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 nila-gradient opacity-90" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.25), transparent 60%)" }} />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-black/30 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-28 h-28 rounded-3xl bg-white flex items-center justify-center mb-6 shadow-2xl">
          <svg width="72" height="72" viewBox="0 0 40 40">
            <path d="M14 12 L14 28 L18 28 L18 20 L26 28 L26 12 L22 12 L22 20 L14 12 Z" fill="#E6578A"/>
          </svg>
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-white mb-2">Nila OTT</h1>
        <p className="text-white/80 text-sm mb-16">Stream. Watch. Enjoy.</p>

        <div className="flex gap-1.5 mb-8">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-white/70 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
          ))}
        </div>

        <Link href="/login" className="text-white/70 text-xs underline">Continue →</Link>
      </div>

      <div className="absolute bottom-8 text-white/60 text-xs">v1.0.0 · © 2026 Nila</div>
    </div>
  );
}
