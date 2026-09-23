import { PageHeader } from "../components/Nav";
import { SettingsList } from "../components/ListRow";
import { Logo } from "../components/Logo";

export default function About() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader title="About Us" back="/profile" />
      <div className="max-w-2xl mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col items-center text-center mb-10">
          <Logo size={64} showText={false} />
          <h1 className="font-display font-bold text-3xl mt-4">Nila OTT</h1>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mt-1">v1.0.0 · Build 2609</p>
          <p className="text-sm text-muted-2 mt-6 max-w-md leading-relaxed">
            Nila is a home for stories from India and the world — movies, series, microdramas, and live channels — designed for the way we watch today.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-10">
          {[["4.2K+", "Titles"], ["12M", "Members"], ["190+", "Countries"]].map(([n, l]) => (
            <div key={l} className="p-4 rounded-2xl bg-surface border border-line text-center">
              <p className="font-display font-bold text-2xl nila-text">{n}</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted mt-1">{l}</p>
            </div>
          ))}
        </div>

        <SettingsList items={[
          { label: "What's new", icon: "info", href: "#" },
          { label: "Rate Nila on the App Store", icon: "heart", href: "#" },
          { label: "Follow us on Instagram", icon: "share", href: "#" },
          { label: "Careers", icon: "user", href: "#" },
        ]} />

        <div className="h-6" />

        <SettingsList items={[
          { label: "Terms of Service", icon: "info", href: "#" },
          { label: "Privacy Policy", icon: "lock", href: "#" },
          { label: "Content policy", icon: "info", href: "#" },
          { label: "Open source licenses", icon: "info", href: "#" },
        ]} />

        <p className="text-center text-[11px] font-mono uppercase tracking-widest text-muted mt-10">Made with ♥ in Chennai · © 2026 NILA</p>
      </div>
    </div>
  );
}
