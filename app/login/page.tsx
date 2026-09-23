import Link from "next/link";
import { Logo } from "../components/Logo";

export default function Login() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left visual */}
      <div className="hidden md:flex relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 nila-gradient" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 60%)" }} />
        <div className="relative z-10 text-white max-w-md">
          <Logo size={44} />
          <h2 className="text-4xl font-bold mt-8 leading-tight">Endless entertainment awaits.</h2>
          <p className="mt-4 text-white/85">Movies, series, microdramas and live TV — all in one place. Watch on any device.</p>
          <div className="mt-10 grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[2/3] rounded-xl bg-white/15 backdrop-blur border border-white/20" />
            ))}
          </div>
        </div>
      </div>

      {/* Right form */}
      <div className="flex flex-col items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-sm">
          <div className="md:hidden mb-8 flex justify-center"><Logo size={40} /></div>
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-white/60 text-sm mb-8">Sign in to continue watching</p>

          <div className="flex bg-surface p-1 rounded-xl mb-6">
            <button className="flex-1 py-2 rounded-lg bg-nila text-white text-sm font-medium">Phone</button>
            <button className="flex-1 py-2 rounded-lg text-white/60 text-sm">Email</button>
          </div>

          <label className="text-xs text-white/60 mb-1.5 block">Mobile number</label>
          <div className="flex gap-2 mb-4">
            <div className="w-20 bg-surface border border-white/10 rounded-xl px-3 flex items-center text-sm">+91 ▾</div>
            <input placeholder="98765 43210" className="flex-1 bg-surface border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-nila text-sm" />
          </div>

          <label className="text-xs text-white/60 mb-1.5 block">OTP</label>
          <div className="flex gap-2 mb-2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <input key={i} maxLength={1} className="w-full h-12 bg-surface border border-white/10 rounded-xl text-center text-lg font-bold outline-none focus:border-nila" />
            ))}
          </div>
          <div className="flex justify-between text-xs mb-6">
            <span className="text-white/50">Resend in 00:29</span>
            <button className="text-nila-light">Resend</button>
          </div>

          <Link href="/home" className="block w-full py-3.5 rounded-xl nila-gradient text-white text-center font-semibold nila-glow hover:opacity-95">
            Sign in
          </Link>

          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-xs text-white/40">or continue with</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {["Google", "Apple", "FB"].map((p) => (
              <button key={p} className="py-3 rounded-xl bg-surface border border-white/10 text-sm hover:border-nila/50">{p}</button>
            ))}
          </div>

          <p className="text-xs text-white/40 text-center mt-8">
            By continuing you agree to our <span className="text-nila-light">Terms</span> & <span className="text-nila-light">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}
