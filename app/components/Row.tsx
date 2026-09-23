import { Poster } from "./Poster";

export function Row({ title, items, ratio = "portrait" }: { title: string; items: { title: string; badge?: string }[]; ratio?: "portrait" | "landscape" }) {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-3 px-4 md:px-0">
        <h2 className="text-lg md:text-xl font-bold">{title}</h2>
        <button className="text-xs text-nila-light hover:underline">See all →</button>
      </div>
      <div className="flex gap-3 overflow-x-auto hide-scrollbar px-4 md:px-0 pb-2">
        {items.map((it, i) => (
          <div key={i} className={ratio === "portrait" ? "w-32 md:w-40 shrink-0" : "w-64 md:w-80 shrink-0"}>
            <Poster title={it.title} id={i + title.length} ratio={ratio} badge={it.badge} />
          </div>
        ))}
      </div>
    </section>
  );
}
