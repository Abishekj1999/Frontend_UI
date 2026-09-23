import { TopNav, BottomNav } from "../components/Nav";

const plans = [
  { name: "Mobile", price: "₹79", period: "/month", features: ["Watch on mobile only", "480p SD quality", "1 device at a time", "Ad-supported"], best: false },
  { name: "Basic", price: "₹149", period: "/month", features: ["Watch on any device", "720p HD quality", "1 device at a time", "Downloads on 1 device"], best: false },
  { name: "Premium", price: "₹299", period: "/month", features: ["Watch on any device", "4K Ultra HD + HDR", "4 devices simultaneously", "Downloads on 4 devices", "Dolby Atmos audio", "Ad-free"], best: true },
  { name: "Family", price: "₹499", period: "/month", features: ["Everything in Premium", "Up to 6 profiles", "Kids-safe mode", "Priority support"], best: false },
];

export default function Subscription() {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopNav />
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold bg-nila px-3 py-1 rounded-full">CHOOSE YOUR PLAN</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-3">Watch more, pay less</h1>
          <p className="text-white/60 max-w-xl mx-auto">Unlimited access to movies, series, microdramas & live TV. Cancel anytime.</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-surface p-1 rounded-full">
            <button className="px-6 py-2 rounded-full bg-nila text-sm font-medium">Monthly</button>
            <button className="px-6 py-2 rounded-full text-white/60 text-sm">Yearly · Save 30%</button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {plans.map((p) => (
            <div key={p.name} className={`p-6 rounded-2xl border relative ${p.best ? "bg-nila/10 border-nila nila-glow" : "bg-surface border-white/5"}`}>
              {p.best && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-nila px-3 py-1 rounded-full">MOST POPULAR</span>}
              <h3 className="text-lg font-semibold mb-1">{p.name}</h3>
              <p className="mb-6">
                <span className="text-3xl font-bold">{p.price}</span>
                <span className="text-sm text-white/50">{p.period}</span>
              </p>
              <ul className="space-y-2.5 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="text-sm flex items-start gap-2">
                    <span className="text-nila mt-0.5">✓</span>
                    <span className="text-white/80">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2.5 rounded-xl font-semibold text-sm ${p.best ? "nila-gradient" : "bg-white/10 hover:bg-white/15"}`}>
                {p.best ? "Get Premium" : "Choose"}
              </button>
            </div>
          ))}
        </div>

        {/* Payment mockup */}
        <div className="mt-12 p-6 rounded-2xl bg-surface border border-white/5 max-w-md mx-auto">
          <h3 className="font-semibold mb-4">Payment method</h3>
          <div className="space-y-2">
            {["UPI · Google Pay / PhonePe", "Credit / Debit Card", "Net Banking", "Wallet"].map((m, i) => (
              <label key={m} className="flex items-center gap-3 p-3 rounded-xl bg-surface-2 hover:bg-white/5 cursor-pointer">
                <input type="radio" name="p" defaultChecked={i === 0} className="accent-nila" />
                <span className="text-sm">{m}</span>
              </label>
            ))}
          </div>
          <button className="w-full mt-4 py-3 rounded-xl nila-gradient font-semibold nila-glow">Pay ₹299 & Subscribe</button>
          <p className="text-[10px] text-white/50 text-center mt-3">Secure payment · Cancel anytime</p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
