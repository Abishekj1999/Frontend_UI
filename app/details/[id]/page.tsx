import Link from "next/link";
import { TopNav, BottomNav } from "../../components/Nav";
import { Poster } from "../../components/Poster";

export default function Details() {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopNav />

      <section className="relative h-[65vh]">
        <div className="absolute inset-0 nila-gradient" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.2), transparent 60%)" }} />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 h-full flex items-end pb-10 px-4 md:px-12 max-w-[1400px] mx-auto">
          <div className="flex gap-6 items-end w-full">
            <div className="hidden md:block w-56 shrink-0 -mb-16 rounded-xl overflow-hidden shadow-2xl">
              <Poster title="" id={11} />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-3">The Midnight Shore</h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/85 mb-4">
                <span className="text-nila-light font-semibold">★ 8.7</span>
                <span>2026</span><span>·</span><span>Thriller · Drama</span><span>·</span><span>2h 14m</span>
                <span className="px-1.5 py-0.5 border border-white/40 text-[10px]">U/A 16+</span>
                <span className="px-2 py-0.5 bg-white/15 rounded text-[10px]">4K HDR</span>
                <span className="px-2 py-0.5 bg-white/15 rounded text-[10px]">Dolby Atmos</span>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link href="/player/1" className="px-6 py-3 bg-white text-black rounded-full font-semibold text-sm flex items-center gap-2">▶ Play</Link>
                <Link href="/player/1" className="px-6 py-3 bg-white/15 border border-white/25 rounded-full text-sm">▶ Trailer</Link>
                <button className="w-11 h-11 rounded-full bg-white/15 border border-white/25">+</button>
                <button className="w-11 h-11 rounded-full bg-white/15 border border-white/25">↓</button>
                <button className="w-11 h-11 rounded-full bg-white/15 border border-white/25">↗</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-8 md:pt-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-2">Synopsis</h2>
            <p className="text-white/80 mb-6">A coastal detective uncovers a decades-old conspiracy that reaches into the heart of the city's most powerful families. As secrets surface, allegiances shatter and the line between justice and revenge blurs beyond recognition.</p>

            <h2 className="text-xl font-bold mb-3">Cast</h2>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar mb-8">
              {["Vijay S.", "Trisha", "Fahadh F.", "Nayanthara", "Suriya"].map((n, i) => (
                <div key={n} className="text-center shrink-0 w-20">
                  <div className="w-16 h-16 rounded-full mx-auto mb-2" style={{ background: `linear-gradient(135deg, hsl(${i * 70}, 60%, 55%), hsl(${i * 70}, 60%, 30%))` }} />
                  <p className="text-xs font-medium">{n}</p>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold mb-3">Reviews</h2>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 rounded-xl bg-surface border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full nila-gradient" />
                    <div>
                      <p className="text-sm font-semibold">User {i}</p>
                      <p className="text-[10px] text-white/50">★★★★★ · 2 days ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/75">Absolutely gripping from start to finish. The cinematography is stunning and the performances are top-tier.</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="p-4 rounded-xl bg-surface border border-white/5">
              <h3 className="font-semibold mb-3">Details</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-white/50">Director</dt><dd>Mani Ratnam</dd></div>
                <div className="flex justify-between"><dt className="text-white/50">Language</dt><dd>Tamil</dd></div>
                <div className="flex justify-between"><dt className="text-white/50">Subtitles</dt><dd>EN, HI, TE</dd></div>
                <div className="flex justify-between"><dt className="text-white/50">Audio</dt><dd>TA, HI, EN</dd></div>
                <div className="flex justify-between"><dt className="text-white/50">Release</dt><dd>Sep 15, 2026</dd></div>
              </dl>
            </div>
            <div>
              <h3 className="font-semibold mb-3">More Like This</h3>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => <Poster key={i} title={`Similar ${i}`} id={i * 9} />)}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
