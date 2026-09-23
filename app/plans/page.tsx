import Link from "next/link";
import { PageHeader } from "../components/Nav";
import { Icon } from "../components/Icon";

const plans = [
  { name: "Mobile", price: 79, period: "mo", features: ["Mobile only", "480p SD", "1 stream", "Ad-supported"] },
  { name: "Basic", price: 149, period: "mo", features: ["Any device", "720p HD", "1 stream", "Downloads on 1 device"] },
  { name: "Premium", price: 299, period: "mo", best: true, features: ["Any device", "4K Ultra HD + HDR", "4 streams", "Downloads on 4", "Dolby Atmos", "Ad-free"] },
  { name: "Family", price: 499, period: "mo", features: ["Everything in Premium", "6 profiles", "Kids-safe mode", "Priority support"] },
];

export default function Plans() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader title="Choose a Plan" back="/profile" />
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8">
        <div className="text-center mb-10">
          <p className="eyebrow">◆ Membership</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl mt-3 tracking-tighter">Watch more, pay less.</h1>
          <p className="text-muted-2 mt-3 max-w-md mx-auto">Unlimited access to movies, series, microdramas & live TV. Cancel anytime.</p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-surface border border-line p-1 rounded-full">
            <button className="px-6 py-2.5 rounded-full bg-nila text-sm font-medium">Monthly</button>
            <button className="px-6 py-2.5 rounded-full text-muted text-sm">Yearly · Save 30%</button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {plans.map((p) => (
            <div key={p.name} className={`relative p-6 rounded-3xl border transition ${p.best ? "border-nila nila-glow" : "border-line hover:border-line-2"}`} style={p.best ? { background: "linear-gradient(135deg, rgba(230,87,138,0.12), rgba(230,87,138,0.02))" } : { background: "var(--surface)" }}>
              {p.best && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold bg-nila px-3 py-1 rounded-full tracking-widest">MOST POPULAR</span>}
              <h3 className="font-display font-bold text-xl mb-1">{p.name}</h3>
              <p className="mb-6">
                <span className="font-display font-bold text-4xl">₹{p.price}</span>
                <span className="text-sm text-muted">/{p.period}</span>
              </p>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="text-sm flex items-start gap-2.5">
                    <Icon name="check" size={16} className="text-nila mt-0.5 shrink-0" stroke={2.5} />
                    <span className="text-muted-2">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/payment" className={`block text-center w-full py-3 rounded-xl font-semibold text-sm ${p.best ? "nila-gradient text-white" : "bg-white/10 hover:bg-white/15 text-white"}`}>
                {p.best ? "Get Premium" : "Choose"}
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison note */}
        <div className="mt-12 p-6 rounded-2xl bg-surface border border-line text-center text-sm text-muted">
          All plans include unlimited streaming · Cancel anytime · No hidden fees
        </div>
      </div>
    </div>
  );
}
