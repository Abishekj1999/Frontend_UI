import Link from "next/link";
import { Logo } from "../components/Logo";

export default function Login() {
  return (
    <div className="min-h-screen grid md:grid-cols-[1.1fr_1fr]">
      {/* Left visual */}
      <div className="hidden md:flex relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 nila-gradient" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 60%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, transparent 40%, rgba(0,0,0,0.4) 100%)" }} />

        <div className="relative z-10 text-white max-w-md">
          <Logo size={44} />
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-white/85">Endless entertainment</p>
          <h2 className="font-display font-bold text-5xl mt-3 leading-[0.95] tracking-tighter">Movies, series & moments — all in your pocket.</h2>
          <p className="mt-5 text-white/85 leading-relaxed">Watch on any device. Download for offline. Cancel anytime.</p>
          <div className="mt-10 grid grid-cols-4 gap-2">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <div key={i} className="aspect-[2/3] rounded-lg bg-white/15 backdrop-blur border border-white/20" />
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-12 right-12 flex items-center justify-between text-white/70 text-[11px] font-mono">
          <span>© 2026 NILA</span>
          <span>PRIVACY · TERMS</span>
        </div>
      </div>

      {/* Right form */}
      <div className="flex flex-col items-center justify-center p-6 md:p-12 bg-background">
        <div className="w-full max-w-sm">
          <div className="md:hidden mb-10 flex justify-center"><Logo size={40} /></div>
          <p className="eyebrow">◆ Sign in</p>
          <h1 className="font-display font-bold text-4xl mt-2 mb-2 tracking-tight">Welcome back.</h1>
          <p className="text-sm text-muted mb-8">Continue where you left off.</p>

          <div className="flex bg-surface border border-line p-1 rounded-2xl mb-6">
            <button className="flex-1 py-2.5 rounded-xl nila-gradient text-white text-sm font-semibold nila-glow">Phone</button>
            <button className="flex-1 py-2.5 rounded-xl text-white/60 text-sm font-medium">Email</button>
          </div>

          <label className="text-[10px] font-mono uppercase tracking-widest text-muted mb-2 block">Mobile number</label>
          <div className="flex gap-2 mb-5">
            <div className="w-24 bg-surface border border-line rounded-xl px-3 flex items-center text-sm">🇮🇳 +91</div>
            <input placeholder="98765 43210" className="flex-1 bg-surface border border-line rounded-xl px-4 py-3 outline-none focus:border-nila text-sm placeholder:text-muted" />
          </div>

          <label className="text-[10px] font-mono uppercase tracking-widest text-muted mb-2 block">One-time password</label>
          <div className="flex gap-2 mb-2">
            {[4, 2, 8, "", "", ""].map((d, i) => (
              <input key={i} defaultValue={String(d)} maxLength={1} className={`w-full h-14 bg-surface border rounded-xl text-center text-xl font-display font-bold outline-none focus:border-nila ${d !== "" ? "border-nila text-nila-light" : "border-line"}`} />
            ))}
          </div>
          <div className="flex justify-between text-xs mb-6">
            <span className="text-muted">Resend in 00:29</span>
            <button className="text-nila-light font-medium">Resend OTP</button>
          </div>

          <Link href="/home" className="block w-full py-3.5 rounded-2xl nila-gradient text-white text-center font-semibold nila-glow">
            Sign in
          </Link>

          <div className="my-8 flex items-center gap-3">
            <div className="flex-1 h-px bg-line-2"></div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted">or continue with</span>
            <div className="flex-1 h-px bg-line-2"></div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {["Google", "Apple", "Meta"].map((p) => (
              <button key={p} className="py-3 rounded-xl bg-surface border border-line text-sm hover:border-line-2 transition">{p}</button>
            ))}
          </div>

          <p className="text-[11px] text-muted text-center mt-10 leading-relaxed">
            By continuing you agree to Nila's <span className="text-nila-light underline">Terms</span> and <span className="text-nila-light underline">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
