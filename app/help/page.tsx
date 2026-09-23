import { PageHeader } from "../components/Nav";
import { Icon } from "../components/Icon";

const topics = [
  { icon: "play", t: "Playback issues", d: "Video won't play, buffering, quality" },
  { icon: "card", t: "Payments & billing", d: "Subscriptions, refunds, plans" },
  { icon: "user", t: "Account", d: "Login, password, profile" },
  { icon: "download", t: "Downloads", d: "Offline viewing, storage" },
  { icon: "tv", t: "Devices & apps", d: "TV, mobile, casting" },
  { icon: "lock", t: "Privacy & security", d: "Data, controls, sign-outs" },
];

const faqs = [
  { q: "How do I download for offline?", a: "Tap the download icon on any detail page. Downloads work on Basic plan and above." },
  { q: "Can I share my account?", a: "Family plan supports up to 6 profiles. Sharing outside your household violates our terms." },
  { q: "Why can't I stream in 4K?", a: "4K requires the Premium plan, a compatible device, and at least 25 Mbps connection." },
];

export default function Help() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader title="Help & Support" back="/profile" />
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-6">
        {/* Search */}
        <div className="relative mb-6">
          <input placeholder="Describe your issue…" className="w-full bg-surface border border-line focus:border-nila outline-none rounded-2xl pl-12 pr-4 py-3.5 text-sm" />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"><Icon name="search" /></div>
        </div>

        {/* Topic grid */}
        <p className="eyebrow px-2 mb-3">Browse topics</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {topics.map((t) => (
            <button key={t.t} className="p-4 rounded-2xl bg-surface border border-line hover:border-nila/40 text-left group transition">
              <div className="w-10 h-10 rounded-xl bg-nila/10 text-nila-light flex items-center justify-center mb-3 group-hover:bg-nila group-hover:text-white transition"><Icon name={t.icon} /></div>
              <p className="font-semibold text-sm">{t.t}</p>
              <p className="text-xs text-muted mt-1">{t.d}</p>
            </button>
          ))}
        </div>

        {/* FAQs */}
        <p className="eyebrow px-2 mb-3">Frequently asked</p>
        <div className="space-y-2 mb-8">
          {faqs.map((f, i) => (
            <details key={i} className="rounded-2xl bg-surface border border-line overflow-hidden group">
              <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                <span className="font-medium text-sm">{f.q}</span>
                <Icon name="chevDown" size={16} className="text-muted group-open:rotate-180 transition" />
              </summary>
              <p className="px-4 pb-4 text-sm text-muted-2 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>

        {/* Contact */}
        <p className="eyebrow px-2 mb-3">Still need help?</p>
        <div className="grid md:grid-cols-3 gap-3">
          <button className="p-4 rounded-2xl bg-surface border border-line hover:border-nila/40 flex flex-col items-center text-center transition">
            <Icon name="chatbubble" size={22} className="text-nila-light mb-2" />
            <p className="font-semibold text-sm">Live chat</p>
            <p className="text-xs text-muted mt-1">Avg. 2 min wait</p>
          </button>
          <button className="p-4 rounded-2xl bg-surface border border-line hover:border-nila/40 flex flex-col items-center text-center transition">
            <Icon name="mail" size={22} className="text-nila-light mb-2" />
            <p className="font-semibold text-sm">Email us</p>
            <p className="text-xs text-muted mt-1">help@nila.tv</p>
          </button>
          <button className="p-4 rounded-2xl bg-surface border border-line hover:border-nila/40 flex flex-col items-center text-center transition">
            <Icon name="phone" size={22} className="text-nila-light mb-2" />
            <p className="font-semibold text-sm">Call us</p>
            <p className="text-xs text-muted mt-1">1800-NILA-OTT</p>
          </button>
        </div>
      </div>
    </div>
  );
}
