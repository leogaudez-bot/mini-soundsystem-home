import type { Benefit } from "@/content/site";

export function BenefitGrid({ items }: { items: Benefit[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-[1.75rem] border border-black/6 bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] sm:p-8"
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone-500">
            Benefit
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-stone-950">
            {item.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-stone-600">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
