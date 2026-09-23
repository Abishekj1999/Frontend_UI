import { Poster } from "./Poster";

export function Row({ title, subtitle, items, ratio = "portrait" }: {
  title: string; subtitle?: string;
  items: { title: string; badge?: string; progress?: number }[];
  ratio?: "portrait" | "landscape";
}) {
  return (
    <section className="mb-10">
      <div className="flex items-end justify-between mb-3 px-4 md:px-0">
        <div>
          <h2 className="font-display font-bold text-xl md:text-2xl">{title}</h2>
          {subtitle && <p className="text-xs text-muted mt-0.5">{subtitle}</p>}
        </div>
        <button className="text-xs text-nila-light hover:underline font-mono">See all →</button>
      </div>
      <div className="flex gap-3 overflow-x-auto hide-scrollbar px-4 md:px-0 pb-2">
        {items.map((it, i) => (
          <div key={i} className={ratio === "portrait" ? "w-32 md:w-44 shrink-0" : "w-64 md:w-80 shrink-0"}>
            <Poster title={it.title} id={i + title.length} ratio={ratio} badge={it.badge} progress={it.progress} />
          </div>
        ))}
      </div>
    </section>
  );
}
