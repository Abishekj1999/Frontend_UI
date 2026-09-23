import Link from "next/link";
import { TopNav, BottomNav } from "../../components/Nav";
import { Poster } from "../../components/Poster";
import { Icon } from "../../components/Icon";

export default function Details() {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopNav />

      <section className="relative h-[70vh]">
        <div className="absolute inset-0 nila-gradient" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.25), transparent 60%)" }} />
        <div className="absolute inset-0 hero-gradient" />

        <div className="relative z-10 h-full flex items-end pb-12 px-4 md:px-12 max-w-[1440px] mx-auto">
          <div className="flex gap-8 items-end w-full">
            <div className="hidden md:block w-60 shrink-0 -mb-20 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Poster id={11} />
            </div>
            <div className="flex-1">
              <span className="eyebrow">◆ Nila Original</span>
              <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter leading-none my-3">The Midnight Shore</h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/90 mb-5">
                <span className="text-nila-light font-semibold text-base">★ 8.7</span>
                <span className="text-white/40">·</span>
                <span>2026</span><span className="text-white/40">·</span><span>Thriller · Drama</span>
                <span className="text-white/40">·</span><span>2h 14m</span>
                <span className="px-1.5 py-0.5 border border-white/40 text-[10px] rounded">U/A 16+</span>
                <span className="px-2 py-0.5 bg-white/15 rounded text-[10px] font-mono">4K HDR</span>
                <span className="px-2 py-0.5 bg-white/15 rounded text-[10px] font-mono">DOLBY ATMOS</span>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link href="/player/1" className="px-8 py-3.5 bg-white text-black rounded-full font-semibold text-sm flex items-center gap-2"><Icon name="play" size={16} stroke={0} className="fill-black" /> Play</Link>
                <Link href="/player/1" className="px-6 py-3.5 bg-white/15 backdrop-blur border border-white/25 rounded-full text-sm flex items-center gap-2"><Icon name="play" size={14} /> Trailer</Link>
                <button className="w-12 h-12 rounded-full bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center"><Icon name="plus" size={18} /></button>
                <button className="w-12 h-12 rounded-full bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center"><Icon name="download" size={18} /></button>
                <button className="w-12 h-12 rounded-full bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center"><Icon name="share" size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-10 md:pt-24">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="font-display font-bold text-2xl mb-3">Synopsis</h2>
            <p className="text-muted-2 mb-8 leading-relaxed">A coastal detective uncovers a decades-old conspiracy that reaches into the heart of the city's most powerful families. As secrets surface, allegiances shatter and the line between justice and revenge blurs beyond recognition.</p>

            <h2 className="font-display font-bold text-2xl mb-4">Cast</h2>
            <div className="flex gap-6 overflow-x-auto hide-scrollbar mb-10">
              {["Vijay S.", "Trisha", "Fahadh F.", "Nayanthara", "Suriya", "Kamal H."].map((n, i) => (
                <div key={n} className="text-center shrink-0 w-20">
                  <div className="w-20 h-20 rounded-full mx-auto mb-2 shadow-lg" style={{ background: `linear-gradient(135deg, hsl(${i * 60}, 60%, 55%), hsl(${i * 60}, 60%, 30%))` }} />
                  <p className="text-xs font-medium">{n}</p>
                  <p className="text-[10px] text-muted">Actor</p>
                </div>
              ))}
            </div>

            <h2 className="font-display font-bold text-2xl mb-4">Reviews</h2>
            <div className="space-y-3">
              {[
                { u: "Aravind", r: 5, t: "Absolutely gripping from start to finish. The cinematography is stunning and the performances are top-tier." },
                { u: "Priya", r: 4, t: "A slow burn but rewarding — the final twist genuinely surprised me." },
                { u: "Kishore", r: 5, t: "Best Tamil thriller of the year. Watch it in Atmos if you can." },
              ].map((rv, i) => (
                <div key={i} className="p-5 rounded-2xl bg-surface border border-line">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-full nila-gradient font-display font-bold flex items-center justify-center text-sm">{rv.u[0]}</div>
                    <div>
                      <p className="text-sm font-semibold">{rv.u}</p>
                      <p className="text-[11px] text-muted">{"★".repeat(rv.r)}{"☆".repeat(5-rv.r)} · 2 days ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-2 leading-relaxed">{rv.t}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="p-5 rounded-2xl bg-surface border border-line">
              <h3 className="font-display font-bold mb-4">Details</h3>
              <dl className="space-y-3 text-sm">
                {[
                  ["Director", "Mani Ratnam"], ["Writer", "Jeyamohan"], ["Studio", "Nila Originals"],
                  ["Language", "Tamil"], ["Subtitles", "EN, HI, TE, KN"], ["Audio", "TA, HI, EN"],
                  ["Release", "Sep 15, 2026"], ["Runtime", "2h 14m"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <dt className="text-muted">{k}</dt>
                    <dd className="font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="font-display font-bold mb-3">More Like This</h3>
              <div className="grid grid-cols-2 gap-3">
                {["Vikram", "Kaithi", "Master", "Asuran"].map((t, i) => (
                  <div key={i}><Poster title={t} id={i * 9} /></div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
