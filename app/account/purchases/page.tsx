import { PageHeader } from "../../components/Nav";
import { Icon } from "../../components/Icon";

const rows = [
  { d: "Sep 12, 2026", desc: "Premium · Monthly", amt: 352.82, id: "NILA-8HK92LF", status: "Paid" },
  { d: "Aug 12, 2026", desc: "Premium · Monthly", amt: 352.82, id: "NILA-6RT88PQ", status: "Paid" },
  { d: "Aug 04, 2026", desc: "CEO's Secret Bride · Ep 13-20", amt: 99.00, id: "NILA-5WX21NC", status: "Paid" },
  { d: "Jul 12, 2026", desc: "Premium · Monthly", amt: 352.82, id: "NILA-4YV77KM", status: "Paid" },
  { d: "Jun 12, 2026", desc: "Premium · Monthly", amt: 352.82, id: "NILA-3JA53QE", status: "Paid" },
  { d: "May 22, 2026", desc: "Live Cricket Pass", amt: 149.00, id: "NILA-2FR19BD", status: "Refunded" },
];

export default function Purchases() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader title="Purchase History" back="/profile" right={<button className="text-xs font-mono text-nila-light">EXPORT</button>} />
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-6">
        {/* Summary */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[["₹1,758", "Last 12 mo"], ["6", "Transactions"], ["1", "Refund"]].map(([n, l]) => (
            <div key={l} className="p-4 rounded-2xl bg-surface border border-line text-center">
              <p className="font-display font-bold text-2xl">{n}</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted mt-1">{l}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar">
          {["All", "Subscription", "Rentals", "Refunds"].map((t, i) => (
            <button key={t} className={`px-4 py-2 rounded-full text-sm ${i === 0 ? "bg-white text-black" : "bg-surface border border-line text-white/70"}`}>{t}</button>
          ))}
        </div>

        {/* List */}
        <div className="rounded-2xl bg-surface border border-line divide-y divide-white/[0.04] overflow-hidden">
          {rows.map((r) => (
            <div key={r.id} className="p-4 flex items-center gap-4 hover:bg-white/[0.02]">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${r.status === "Refunded" ? "bg-red-500/15 text-red-400" : "bg-nila/15 text-nila-light"}`}>
                <Icon name="card" size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">{r.desc}</p>
                <p className="text-[11px] font-mono text-muted mt-0.5">{r.d} · {r.id}</p>
              </div>
              <div className="text-right">
                <p className="font-display font-bold text-sm">{r.status === "Refunded" ? "−" : ""}₹{r.amt.toFixed(2)}</p>
                <p className={`text-[10px] font-mono uppercase tracking-widest mt-0.5 ${r.status === "Refunded" ? "text-red-400" : "text-emerald-400"}`}>{r.status}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-muted mt-6">Need an invoice? Tap any row to download.</p>
      </div>
    </div>
  );
}
