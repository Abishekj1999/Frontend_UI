import { PageHeader } from "../../components/Nav";
import { Icon } from "../../components/Icon";

export default function ChangePassword() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader title="Change Password" back="/profile" />
      <div className="max-w-md mx-auto px-4 md:px-6 py-8">
        <div className="w-16 h-16 rounded-2xl bg-nila/15 border border-nila/30 flex items-center justify-center text-nila-light mb-6">
          <Icon name="key" size={26} />
        </div>
        <h1 className="font-display font-bold text-2xl mb-2">Set a new password</h1>
        <p className="text-sm text-muted mb-8">For your security, choose a password you haven't used before.</p>

        {[
          { l: "Current password", v: "" },
          { l: "New password", v: "" },
          { l: "Confirm new password", v: "" },
        ].map((f) => (
          <div key={f.l} className="mb-5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-muted mb-2 block">{f.l}</label>
            <div className="relative">
              <input type="password" defaultValue={f.v} className="w-full bg-surface border border-line rounded-xl pl-4 pr-12 py-3.5 outline-none focus:border-nila text-sm" />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted"><Icon name="info" size={16} /></button>
            </div>
          </div>
        ))}

        <div className="p-4 rounded-2xl bg-surface border border-line mb-6">
          <p className="eyebrow mb-3">Password strength</p>
          <div className="flex gap-1.5 mb-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`flex-1 h-1.5 rounded-full ${i <= 3 ? "bg-nila" : "bg-white/10"}`} />
            ))}
          </div>
          <ul className="space-y-1.5 text-xs text-muted">
            <li className="flex items-center gap-2 text-white/80"><Icon name="check" size={14} className="text-nila" /> At least 8 characters</li>
            <li className="flex items-center gap-2 text-white/80"><Icon name="check" size={14} className="text-nila" /> One uppercase letter</li>
            <li className="flex items-center gap-2 text-white/80"><Icon name="check" size={14} className="text-nila" /> One number</li>
            <li className="flex items-center gap-2"><Icon name="close" size={14} className="text-white/30" /> One special character</li>
          </ul>
        </div>

        <button className="w-full py-3.5 rounded-2xl nila-gradient font-semibold nila-glow">Update password</button>
        <button className="w-full mt-3 py-3.5 rounded-2xl text-sm text-muted">Forgot current password?</button>
      </div>
    </div>
  );
}
