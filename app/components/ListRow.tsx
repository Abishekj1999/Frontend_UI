import Link from "next/link";
import { Icon } from "./Icon";

export function SettingsList({ items }: { items: { label: string; meta?: string; icon?: string; href?: string; onClick?: () => void; danger?: boolean; toggle?: boolean; on?: boolean }[] }) {
  return (
    <div className="rounded-2xl bg-surface border border-line divide-y divide-white/[0.04]">
      {items.map((it, i) => {
        const inner = (
          <div className={`flex items-center gap-3 px-4 py-3.5 hover:bg-white/[0.02] transition ${it.danger ? "text-red-400" : ""}`}>
            {it.icon && <div className="w-9 h-9 rounded-xl bg-surface-2 border border-line-2 flex items-center justify-center text-white/70"><Icon name={it.icon} size={18} /></div>}
            <span className="flex-1 text-sm font-medium">{it.label}</span>
            {it.toggle ? (
              <div className={`w-10 h-6 rounded-full p-0.5 transition ${it.on ? "bg-nila" : "bg-white/10"}`}>
                <div className={`w-5 h-5 rounded-full bg-white transition ${it.on ? "translate-x-4" : ""}`} />
              </div>
            ) : (
              <>
                {it.meta && <span className="text-sm text-muted">{it.meta}</span>}
                {it.href && <Icon name="chev" size={16} className="text-white/30" />}
              </>
            )}
          </div>
        );
        return it.href ? <Link key={i} href={it.href}>{inner}</Link> : <div key={i}>{inner}</div>;
      })}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h3 className="eyebrow px-2 mb-2 mt-8">{children}</h3>;
}
