import { siteContent } from "@/content/site";

function CTAButton({ href, label, muted = false }: { href: string; label: string; muted?: boolean }) {
  return (
    <a
      href={href}
      className={muted
        ? "inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-stone-900 transition hover:border-black/20 hover:bg-stone-50"
        : "inline-flex items-center justify-center rounded-full bg-[#171717] px-5 py-3 text-sm font-medium text-white transition hover:bg-black"}
    >
      {label}
    </a>
  );
}

function LayerPill({ label }: { label: string }) {
  return (
    <span className="inline-flex rounded-full border border-[#d7d1c7] bg-[#f8f5ee] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-stone-700">
      {label}
    </span>
  );
}

export function Hero() {
  return (
    <section className="px-6 pt-6 pb-16 sm:px-8 lg:px-10 lg:pt-8 lg:pb-20">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-black/7 bg-white p-7 shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_18px_60px_-32px_rgba(0,0,0,0.25)] sm:p-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(24rem,0.95fr)] lg:gap-12 lg:p-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
              {siteContent.brand.eyebrow}
            </p>
            <div className="flex flex-wrap gap-2">
              {siteContent.hero.notes.map((note) => (
                <LayerPill key={note} label={note} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="max-w-2xl text-5xl font-semibold tracking-[-0.07em] text-stone-950 sm:text-6xl lg:text-7xl">
              {siteContent.brand.tagline}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
              {siteContent.brand.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton href={siteContent.hero.primaryCta.href} label={siteContent.hero.primaryCta.label} />
            <CTAButton href={siteContent.hero.secondaryCta.href} label={siteContent.hero.secondaryCta.label} muted />
          </div>

          <p className="max-w-2xl rounded-3xl border border-black/6 bg-[#f7f4ee] px-4 py-4 text-sm leading-7 text-stone-600 sm:px-5">
            {siteContent.hero.status}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-black/8 bg-[#141413] p-6 text-[#f7f4ee] shadow-[0_12px_40px_-24px_rgba(0,0,0,0.7)]">
          <div className="relative flex h-full flex-col items-center gap-6">
            <img 
              src={siteContent.heroImage.src}
              alt={siteContent.heroImage.alt}
              className="rounded-[1.5rem] border border-black/4 bg-white/10 p-4 max-w-[32rem] w-full object-cover shadow-lg" 
              loading="eager"
            />
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-[#b7afa1] w-full max-w-sm">
              <span>Stack domestique</span>
              <span>Concept v0.1</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 text-center w-full max-w-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#b7afa1]">Tweeter</p>
                <p className="mt-1 text-xs leading-5 text-[#d7cfc0]">High frequencies</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#b7afa1]">Kick</p>
                <p className="mt-1 text-xs leading-5 text-[#d7cfc0]">Midrange & rhythm</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#b7afa1]">Sub</p>
                <p className="mt-1 text-xs leading-5 text-[#d7cfc0]">Bass foundation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
