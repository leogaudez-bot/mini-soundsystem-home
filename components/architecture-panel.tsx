import { siteContent } from "@/content/site";

export function ArchitecturePanel() {
  return (
    <div className="space-y-6 rounded-[1.75rem] border border-black/6 bg-[#171717] p-6 text-[#f7f4ee] shadow-[0_18px_48px_-28px_rgba(0,0,0,0.55)] sm:p-8">
      <p className="max-w-2xl text-base leading-7 text-[#d8d0c4]">
        {siteContent.architecture.description}
      </p>
      <div className="grid gap-4 lg:grid-cols-3">
        {siteContent.architecture.layers.map((layer, index) => (
          <article
            key={layer.label}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-[#b8b0a4]">
              Layer {index + 1}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
              {layer.label}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#d8d0c4]">{layer.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
