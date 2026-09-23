import Link from "next/link";
import { PageHeader } from "../../components/Nav";
import { Icon } from "../../components/Icon";

export default function Membership() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader title="Membership" back="/profile" />
      <div className="max-w-2xl mx-auto px-4 md:px-6 py-6">
        {/* Current plan card */}
        <div className="relative overflow-hidden rounded-3xl p-6 md:p-8 mb-6 border border-nila/40 nila-glow" style={{ background: "linear-gradient(135deg, rgba(230,87,138,0.2), rgba(122,30,70,0.1))" }}>
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full nila-gradient opacity-40 blur-3xl" />
          <div className="relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="eyebrow">Current plan</p>
                <h1 className="font-display font-bold text-3xl mt-2">Premium</h1>
                <p className="text-sm text-muted-2 mt-1">4K Ultra HD · 4 streams · Ad-free</p>
              </div>
              <Icon name="crown" size={36} className="text-nila-light" />
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display font-bold text-4xl">₹299</span>
              <span className="text-muted">/month</span>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-sm">
              <div>
                <p className="text-muted text-xs">Renews on</p>
                <p className="font-semibold mt-0.5">Oct 12, 2026</p>
              </div>
              <div>
                <p className="text-muted text-xs">Paid via</p>
                <p className="font-semibold mt-0.5 font-mono">•••• 4242</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          <Link href="/plans" className="p-4 rounded-2xl bg-surface border border-line hover:border-nila/40 text-center transition">
            <p className="font-semibold text-sm">Change plan</p>
            <p className="text-xs text-muted mt-1">Upgrade or downgrade</p>
          </Link>
          <Link href="/payment" className="p-4 rounded-2xl bg-surface border border-line hover:border-nila/40 text-center transition">
            <p className="font-semibold text-sm">Payment method</p>
            <p className="text-xs text-muted mt-1">•••• 4242</p>
          </Link>
        </div>

        <p className="eyebrow px-2 mb-3">What's included</p>
        <div className="rounded-2xl bg-surface border border-line divide-y divide-white/[0.04]">
          {[
            ["Watch on any device", true],
            ["4K Ultra HD + HDR", true],
            ["Stream on 4 devices at once", true],
            ["Downloads on 4 devices", true],
            ["Dolby Atmos audio", true],
            ["Ad-free streaming", true],
            ["Kids-safe mode (Family plan)", false],
          ].map(([f, on]) => (
            <div key={String(f)} className="flex items-center gap-3 px-4 py-3">
              {on ? <Icon name="check" size={18} className="text-nila" stroke={2.5} /> : <Icon name="close" size={18} className="text-white/25" />}
              <span className={`text-sm ${on ? "" : "text-muted line-through"}`}>{f}</span>
            </div>
          ))}
        </div>

        <p className="eyebrow px-2 mb-3 mt-8">Usage this month</p>
        <div className="p-5 rounded-2xl bg-surface border border-line">
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-sm">Streaming hours</span>
            <span className="font-display font-bold text-lg">47h <span className="text-muted text-sm font-body font-normal">of unlimited</span></span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-white/5 mb-6">
            <div className="h-full w-[35%] rounded-full nila-gradient" />
          </div>
          <div className="grid grid-cols-3 divide-x divide-white/10 text-center">
            {[["47h", "Streamed"], ["8", "Downloads"], ["3", "Devices"]].map(([n, l]) => (
              <div key={l}>
                <p className="font-display font-bold text-xl">{n}</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full mt-8 py-3.5 rounded-2xl bg-surface border border-red-500/25 text-red-400 text-sm font-medium">Cancel membership</button>
      </div>
    </div>
  );
}
