import { PageHeader } from "../components/Nav";
import { Icon } from "../components/Icon";

export default function Payment() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader title="Payment" back="/plans" />
      <div className="max-w-2xl mx-auto px-4 md:px-6 py-6 grid md:grid-cols-[1fr_360px] gap-8">
        {/* Left: methods */}
        <div>
          <p className="eyebrow mb-3">Payment method</p>
          <div className="space-y-2 mb-8">
            {[
              { l: "UPI", d: "Google Pay · PhonePe · BHIM", i: "📱", on: true },
              { l: "Credit / Debit Card", d: "Visa · Mastercard · Rupay", i: "💳" },
              { l: "Net Banking", d: "All major banks", i: "🏦" },
              { l: "Wallet", d: "Paytm · Amazon Pay", i: "👛" },
            ].map((m) => (
              <label key={m.l} className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition ${m.on ? "bg-nila/8 border-nila" : "bg-surface border-line hover:border-line-2"}`}>
                <input type="radio" name="p" defaultChecked={m.on} className="w-4 h-4 accent-nila" />
                <div className="text-2xl">{m.i}</div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{m.l}</p>
                  <p className="text-xs text-muted mt-0.5">{m.d}</p>
                </div>
              </label>
            ))}
          </div>

          {/* Saved cards */}
          <p className="eyebrow mb-3">Saved cards</p>
          <div className="p-4 rounded-2xl bg-surface border border-line flex items-center gap-4 mb-3">
            <div className="w-12 h-8 rounded bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center text-[10px] font-bold">VISA</div>
            <div className="flex-1">
              <p className="text-sm font-mono">•••• •••• •••• 4242</p>
              <p className="text-xs text-muted mt-0.5">Expires 09/28 · Shalini R.</p>
            </div>
            <button className="text-muted"><Icon name="trash" size={16} /></button>
          </div>
          <button className="w-full py-3 rounded-2xl border-2 border-dashed border-white/10 text-sm text-muted hover:border-nila hover:text-nila transition">+ Add new card</button>

          {/* Promo */}
          <div className="mt-8">
            <p className="eyebrow mb-3">Have a promo code?</p>
            <div className="flex gap-2">
              <input placeholder="Enter code" className="flex-1 bg-surface border border-line rounded-xl px-4 py-3 outline-none focus:border-nila text-sm" />
              <button className="px-5 rounded-xl bg-white/10 font-semibold text-sm">Apply</button>
            </div>
          </div>
        </div>

        {/* Right: summary */}
        <aside className="md:sticky md:top-24 md:self-start">
          <div className="p-6 rounded-3xl bg-surface border border-line">
            <p className="eyebrow mb-3">Order summary</p>
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-line-2">
              <div className="w-12 h-12 rounded-xl nila-gradient flex items-center justify-center"><Icon name="crown" /></div>
              <div>
                <p className="font-display font-bold">Premium · Monthly</p>
                <p className="text-xs text-muted">Renews every month</p>
              </div>
            </div>
            <dl className="space-y-2 text-sm mb-4">
              <div className="flex justify-between"><dt className="text-muted">Subtotal</dt><dd>₹299.00</dd></div>
              <div className="flex justify-between"><dt className="text-muted">GST (18%)</dt><dd>₹53.82</dd></div>
              <div className="flex justify-between text-nila-light"><dt>Promo</dt><dd>−₹0.00</dd></div>
            </dl>
            <div className="pt-4 border-t border-line-2 flex justify-between mb-6">
              <span className="font-display font-bold">Total</span>
              <span className="font-display font-bold text-xl">₹352.82</span>
            </div>
            <button className="w-full py-3.5 rounded-2xl nila-gradient font-semibold nila-glow">Pay ₹352.82</button>
            <p className="text-[11px] text-muted text-center mt-3 flex items-center justify-center gap-1"><Icon name="lock" size={12} /> Secure · 256-bit SSL</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
