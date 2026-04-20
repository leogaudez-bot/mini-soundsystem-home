import Link from "next/link";
import { ArchitecturePanel } from "@/components/architecture-panel";
import { BenefitGrid } from "@/components/benefit-grid";
import { DownloadGrid } from "@/components/download-grid";
import { FaqList } from "@/components/faq-list";
import { Hero } from "@/components/hero";
import { PositioningBlock } from "@/components/positioning-block";
import { SectionShell } from "@/components/section-shell";
import { siteContent } from "@/content/site";

function AudienceCards() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {siteContent.audience.map((item) => (
        <article
          key={item.title}
          className="rounded-[1.75rem] border border-black/6 bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] sm:p-8"
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone-500">
            Audience
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

function UseCaseCards() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {siteContent.useCases.map((item) => (
        <article
          key={item.title}
          className="rounded-[1.75rem] border border-black/6 bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] sm:p-8"
        >
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-stone-950">
            {item.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-stone-600">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

function TrustPanel() {
  return (
    <div className="rounded-[1.75rem] border border-black/6 bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] sm:p-8">
      <p className="max-w-3xl text-lg leading-8 text-stone-700">{siteContent.trust.body}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {siteContent.trust.points.map((point) => (
          <div key={point} className="rounded-[1.5rem] border border-black/6 bg-[#f7f4ee] p-5 text-sm leading-7 text-stone-700">
            {point}
          </div>
        ))}
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="px-6 pt-6 pb-16 sm:px-8 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-black/6 bg-[#171717] px-7 py-10 text-[#f7f4ee] shadow-[0_24px_70px_-35px_rgba(0,0,0,0.6)] sm:px-10 sm:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#b7afa1]">Ready to share</p>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
              {siteContent.footer.title}
            </h2>
            <p className="text-lg leading-8 text-[#d8d0c4]">{siteContent.footer.description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#downloads"
              className="inline-flex items-center justify-center rounded-full bg-[#c96442] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#b45435]"
            >
              Ouvrir les livrables
            </a>
            <Link
              href="/business-plan"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Lire le business plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionShell
        id="concept"
        eyebrow="Positioning"
        title={siteContent.positioning.title}
        description="Le projet est construit comme une catégorie intermédiaire: plus de personnalité qu’une enceinte lifestyle, moins de lourdeur qu’un setup de sonorisation classique."
      >
        <PositioningBlock />
      </SectionShell>

      <SectionShell
        eyebrow="Benefits"
        title="Une proposition simple à comprendre"
        description="La landing assume une promesse mesurée: clarté du concept, désirabilité visuelle et possibilité de prolonger le projet sérieusement ensuite."
      >
        <BenefitGrid items={[...siteContent.benefits]} />
      </SectionShell>

      <SectionShell
        eyebrow="Audience"
        title="Pour qui ce concept peut compter"
        description="Le positionnement est pensé pour des publics de niche mais cohérents, capables de valoriser à la fois l’usage, l’objet et l’histoire du produit."
      >
        <AudienceCards />
      </SectionShell>

      <SectionShell
        eyebrow="Architecture"
        title={siteContent.architecture.title}
        description="Le stack rend le produit lisible. Il aide à raconter le projet, à expliquer sa logique et à préparer des évolutions futures sans faire de promesses techniques non prouvées."
      >
        <ArchitecturePanel />
      </SectionShell>

      <SectionShell
        eyebrow="Use cases"
        title="Des scènes d’usage réalistes"
        description="Le projet est plus crédible lorsqu’il est montré dans des contextes domestiques ou créatifs précis, plutôt qu’à travers un imaginaire de surpuissance."
      >
        <UseCaseCards />
      </SectionShell>

      <SectionShell
        eyebrow="Trust"
        title={siteContent.trust.title}
        description="La crédibilité vient ici de la structure, de la transparence et de la qualité du cadrage, pas de promesses gonflées."
      >
        <TrustPanel />
      </SectionShell>

      <SectionShell
        id="downloads"
        eyebrow="Deliverables"
        title="Landing, stratégie et plans de principe"
        description="Chaque livrable a été préparé pour être partagé facilement avec un pote, un maker, un designer, un partenaire ou un futur développeur produit."
      >
        <DownloadGrid items={[...siteContent.downloads]} />
      </SectionShell>

      <SectionShell
        eyebrow="FAQ"
        title="Les questions qui arrivent tout de suite"
        description="Mieux vaut cadrer le projet honnêtement dès la première version publique."
      >
        <FaqList items={[...siteContent.faq]} />
      </SectionShell>

      <FinalCTA />
    </main>
  );
}
