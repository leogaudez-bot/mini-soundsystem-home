import { siteContent } from "@/content/site";

export function PositioningBlock() {
  return (
    <div className="space-y-6 rounded-[1.75rem] border border-black/6 bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] sm:p-8">
      <p className="text-lg leading-8 text-stone-700">{siteContent.positioning.intro}</p>
      <div className="grid gap-4 sm:grid-cols-3">
        {siteContent.positioning.bullets.map((bullet) => (
          <div key={bullet} className="rounded-[1.5rem] border border-black/6 bg-[#f7f4ee] p-5 text-sm leading-7 text-stone-700">
            {bullet}
          </div>
        ))}
      </div>
    </div>
  );
}
