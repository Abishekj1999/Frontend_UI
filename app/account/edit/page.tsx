import { PageHeader } from "../../components/Nav";
import { Icon } from "../../components/Icon";

export default function EditAccount() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader title="Edit Profile" back="/profile" right={<button className="text-xs font-mono text-nila-light">SAVE</button>} />
      <div className="max-w-xl mx-auto px-4 md:px-6 py-6">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div className="w-28 h-28 rounded-3xl nila-gradient nila-glow flex items-center justify-center font-display font-bold text-5xl">S</div>
            <button className="absolute -bottom-1 -right-1 w-10 h-10 rounded-2xl bg-white text-black border-4 border-background flex items-center justify-center"><Icon name="camera" size={16} /></button>
          </div>
          <button className="mt-4 text-sm text-nila-light font-medium">Change photo</button>
        </div>

        <div className="space-y-5">
          {[
            { l: "Full name", v: "Shalini Ravi", t: "text" },
            { l: "Username", v: "shalini_r", t: "text" },
            { l: "Email", v: "shaliniravi1308@gmail.com", t: "email" },
            { l: "Mobile", v: "+91 98765 43210", t: "tel" },
            { l: "Date of birth", v: "13 Aug 1998", t: "text" },
            { l: "Bio", v: "Tamil cinema fan. Coffee & thrillers.", t: "textarea" },
          ].map((f) => (
            <div key={f.l}>
              <label className="text-[10px] font-mono uppercase tracking-widest text-muted mb-2 block">{f.l}</label>
              {f.t === "textarea" ? (
                <textarea defaultValue={f.v} rows={3} className="w-full bg-surface border border-line rounded-xl px-4 py-3 outline-none focus:border-nila text-sm resize-none" />
              ) : (
                <input type={f.t} defaultValue={f.v} className="w-full bg-surface border border-line rounded-xl px-4 py-3 outline-none focus:border-nila text-sm" />
              )}
            </div>
          ))}

          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-muted mb-2 block">Preferred genres</label>
            <div className="flex flex-wrap gap-2">
              {["Thriller", "Romance", "Drama", "Action", "Comedy", "Sci-Fi", "Horror", "Documentary"].map((g, i) => (
                <button key={g} className={`px-4 py-2 rounded-full text-sm border ${i < 4 ? "bg-nila/15 text-nila-light border-nila/40" : "bg-surface border-line text-muted"}`}>{g}</button>
              ))}
            </div>
          </div>
        </div>

        <button className="w-full mt-8 py-3.5 rounded-2xl nila-gradient font-semibold nila-glow">Save changes</button>
      </div>
    </div>
  );
}
