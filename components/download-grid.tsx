import type { DownloadItem } from "@/content/site";

export function DownloadGrid({ items }: { items: DownloadItem[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="group rounded-[1.75rem] border border-black/6 bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] transition hover:-translate-y-0.5 hover:border-black/12 hover:shadow-[0_18px_50px_-32px_rgba(0,0,0,0.3)] sm:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone-500">
                {item.format}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-stone-950">
                {item.title}
              </h3>
            </div>
            <span className="rounded-full border border-black/8 bg-[#f7f4ee] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-stone-700">
              Download
            </span>
          </div>
          <p className="mt-4 text-base leading-7 text-stone-600">{item.description}</p>
          <p className="mt-6 text-sm font-medium text-stone-950 transition group-hover:translate-x-0.5">
            Ouvrir le document →
          </p>
        </a>
      ))}
    </div>
  );
}
