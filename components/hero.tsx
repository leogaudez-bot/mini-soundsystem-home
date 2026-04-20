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
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(201,100,66,0.42),_transparent_62%)]" />
          <div className="relative flex h-full min-h-[30rem] flex-col justify-between gap-10">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-[#b7afa1]">
              <span>Stack domestique</span>
              <span>Concept v0.1</span>
            </div>

            <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-3">
              <div className="w-36 rounded-[1.25rem] border border-white/12 bg-[#2a2826] px-5 py-5 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_18px_36px_-22px_rgba(0,0,0,0.7)]">
                <div className="mx-auto h-12 w-12 rounded-full border border-[#c96442]/60 bg-[radial-gradient(circle,_rgba(201,100,66,0.75)_0%,_rgba(201,100,66,0.16)_55%,_transparent_70%)]" />
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#d7cfc0]">Tweeter</p>
              </div>
              <div className="w-52 rounded-[1.4rem] border border-white/12 bg-[#211f1d] px-6 py-8 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_40px_-24px_rgba(0,0,0,0.72)]">
                <div className="mx-auto h-20 w-20 rounded-full border border-white/12 bg-[radial-gradient(circle,_rgba(247,244,238,0.16)_0%,_rgba(247,244,238,0.03)_52%,_transparent_70%)]" />
                <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[#d7cfc0]">Kick</p>
              </div>
              <div className="w-72 rounded-[1.65rem] border border-white/12 bg-[#181715] px-6 py-10 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_32px_56px_-28px_rgba(0,0,0,0.85)]">
                <div className="mx-auto h-28 w-28 rounded-full border border-white/12 bg-[radial-gradient(circle,_rgba(247,244,238,0.14)_0%,_rgba(247,244,238,0.04)_56%,_transparent_72%)]" />
                <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[#d7cfc0]">Sub</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/4 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#b7afa1]">Intent</p>
                <p className="mt-2 text-sm leading-6 text-[#f7f4ee]">Créer une catégorie intermédiaire entre enceinte lifestyle et setup encombrant.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/4 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#b7afa1]">Usage</p>
                <p className="mt-2 text-sm leading-6 text-[#f7f4ee]">Salon, studio créatif, petit lieu hybride, moments d’écoute à domicile.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/4 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#b7afa1]">Sortie</p>
                <p className="mt-2 text-sm leading-6 text-[#f7f4ee]">Landing, business plan et plans vectoriels de principe prêts à partager.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
