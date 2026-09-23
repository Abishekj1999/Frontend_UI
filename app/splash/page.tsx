import Link from "next/link";

export default function Splash() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Ambient */}
      <div className="absolute inset-0 nila-gradient opacity-80" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.28), transparent 55%)" }} />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-black/30 blur-3xl" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at bottom, rgba(10,10,16,0.6), transparent 60%)" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-28 h-28 rounded-[28px] bg-white/95 flex items-center justify-center mb-8 shadow-2xl backdrop-blur">
          <span className="font-display font-bold text-6xl text-nila">N</span>
        </div>
        <h1 className="font-display font-bold text-6xl tracking-tighter text-white mb-2">Nila</h1>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/85 mb-20">Stream · Watch · Enjoy</p>

        <div className="flex gap-1.5 mb-10">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
          ))}
        </div>

        <Link href="/welcome" className="font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white">Continue →</Link>
      </div>

      <div className="absolute bottom-8 font-mono text-[10px] tracking-wider text-white/50">v1.0.0 · © 2026 NILA</div>
    </div>
  );
}
